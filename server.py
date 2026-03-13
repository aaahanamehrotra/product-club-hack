import asyncio
import websockets
import json
import random

SENSORS = ["hostel_block_4", "academic_area", "main_pump"]

# We add a dictionary to give the server "memory"
# Now, if a pipe bursts, it stays burst!
sensor_states = {
    "hostel_block_4": {"is_leak": False},
    "academic_area": {"is_leak": False},
    "main_pump": {"is_leak": False}
}

async def simulate_telemetry(websocket):
    print("🔌 Dashboard Connected!")
    try:
        while True:
            # Pick a random sensor to update
            sensor_id = random.choice(SENSORS)
            
            # Check the current state of this specific sensor
            currently_leaking = sensor_states[sensor_id]["is_leak"]
            
            if currently_leaking:
                # If it's already leaking, keep it leaking for a long time!
                # There is only a tiny 5% chance it gets "fixed" in this tick.
                if random.random() < 0.05:
                    sensor_states[sensor_id]["is_leak"] = False
                    is_leak = False
                    print(f"🔧 {sensor_id} was repaired!")
                else:
                    is_leak = True
            else:
                # If it's normal, give it a 10% chance to burst
                if random.random() < 0.1:
                    sensor_states[sensor_id]["is_leak"] = True
                    is_leak = True
                    print(f"🚨 LEAK TRIGGERED at {sensor_id}!")
                else:
                    is_leak = False

            # Generate the numbers based on the persistent state
            if is_leak:
                flow_rate = round(random.uniform(20.0, 45.0), 1) # Massive pressure drop
                pressure = "CRITICAL LOW"
            else:
                flow_rate = round(random.uniform(110.0, 130.0), 1) # Normal flow
                pressure = "Normal"

            # Build and send the payload
            payload = {
                "sensor_id": sensor_id,
                "flow_rate": flow_rate,
                "pressure_status": pressure,
                "is_leak_detected": is_leak
            }

            await websocket.send(json.dumps(payload))
            
            # Wait 1.5 seconds before sending the next update
            await asyncio.sleep(1.5)

    except websockets.exceptions.ConnectionClosed:
        print("❌ Dashboard Disconnected")

async def main():
    async with websockets.serve(simulate_telemetry, "localhost", 8000):
        print("🚀 WebSocket Server running on ws://localhost:8000")
        await asyncio.Future()

if __name__ == "__main__":
    asyncio.run(main())
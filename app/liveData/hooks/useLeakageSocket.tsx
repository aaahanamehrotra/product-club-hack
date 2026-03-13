"use client"; // This is mandatory for hooks in Next.js App Router!

import { useState, useEffect } from "react";

export interface SensorData {
    sensor_id: string;
    flow_rate: number;
    pressure_status: string;
    is_leak_detected: boolean;
}

// NOTICE THE 'export' KEYWORD HERE - This fixes your error!
export const useLeakageSocket = () => {
    const [sensors, setSensors] = useState<Record<string, SensorData>>({});

    useEffect(() => {
        // Connect to your local Python WebSocket server
        const ws = new WebSocket("ws://localhost:8000/ws");

        ws.onmessage = (event) => {
            try {
                const data: SensorData = JSON.parse(event.data);
                setSensors((prev) => ({
                    ...prev,
                    [data.sensor_id]: data,
                }));
            } catch (error) {
                console.error("Failed to parse WebSocket message:", error);
            }
        };

        ws.onerror = (error) => {
            console.error("WebSocket Error:", error);
        };

        // Cleanup function: close connection when component unmounts
        return () => {
            ws.close();
        };
    }, []);

    return { sensors };
};
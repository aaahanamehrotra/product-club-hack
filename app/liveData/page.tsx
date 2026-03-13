"use client";

import React from "react";
import { useLeakageSocket } from "@/app/liveData/hooks/useLeakageSocket";

const SENSOR_NAMES: Record<string, string> = {
    hostel_block_4: "Hostel Block 4",
    academic_area: "Academic Area",
    main_pump: "Main Pump",
};

const LeakWarningIcon = () => (
    <span className="text-red-700 font-bold flex items-center gap-2">
        <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        CRITICAL LEAK
    </span>
);

const LiveLeakFeed: React.FC = () => {
    const { sensors } = useLeakageSocket();

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-6">Live Leak Feed</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {Object.entries(sensors ?? {}).map(([key, sensor]) => (
                    <div
                        key={key}
                        className={`rounded-lg shadow-md p-5 transition-all ${
                            sensor.is_leak_detected
                                ? "bg-red-500 animate-pulse text-white border-2 border-red-700"
                                : "bg-green-50 text-gray-800"
                        }`}
                    >
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-lg font-semibold">{SENSOR_NAMES[key] || key}</span>
                            {sensor.is_leak_detected && <LeakWarningIcon />}
                        </div>
                        <div className="space-y-2">
                            <div>
                                <span className="font-medium">Flow Rate:</span>{" "}
                                <span>{sensor.flow_rate} L/min</span>
                            </div>
                            <div>
                                <span className="font-medium">Pressure Status:</span>{" "}
                                <span>{sensor.pressure_status}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LiveLeakFeed;
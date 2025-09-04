"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface TrafficData {
  name: string;
  visitors: number;
}

interface WebsiteTrafficChartProps {
  data: TrafficData[];
}

export function WebsiteTrafficChart({ data }: WebsiteTrafficChartProps) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="visitors" stroke="#002147" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
}
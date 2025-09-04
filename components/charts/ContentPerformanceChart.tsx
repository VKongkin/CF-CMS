"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface ContentData {
  name: string;
  articles: number;
  courses: number;
  views: number;
}

interface ContentPerformanceChartProps {
  data: ContentData[];
}

export function ContentPerformanceChart({ data }: ContentPerformanceChartProps) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="articles" fill="#002147" name="Articles" />
        <Bar dataKey="courses" fill="#f9a800" name="Courses" />
      </BarChart>
    </ResponsiveContainer>
  );
}
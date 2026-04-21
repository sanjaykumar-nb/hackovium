import React from 'react';
import { motion } from 'framer-motion';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer, Cell,
} from 'recharts';
import '../styles/TimelineChart.css';

const TimelineChart = ({ data, type }) => {
  const chartData = [
    {
      year: 1,
      A: data.optionA[0]?.growthScore || data.optionA[0]?.stress || 0,
      B: data.optionB[0]?.growthScore || data.optionB[0]?.stress || 0,
    },
    {
      year: 2,
      A: data.optionA[1]?.growthScore || data.optionA[1]?.stress || 0,
      B: data.optionB[1]?.growthScore || data.optionB[1]?.stress || 0,
    },
    {
      year: 3,
      A: data.optionA[2]?.growthScore || data.optionA[2]?.stress || 0,
      B: data.optionB[2]?.growthScore || data.optionB[2]?.stress || 0,
    },
    {
      year: 4,
      A: data.optionA[3]?.growthScore || data.optionA[3]?.stress || 0,
      B: data.optionB[3]?.growthScore || data.optionB[3]?.stress || 0,
    },
    {
      year: 5,
      A: data.optionA[4]?.growthScore || data.optionA[4]?.stress || 0,
      B: data.optionB[4]?.growthScore || data.optionB[4]?.stress || 0,
    },
  ];

  return (
    <motion.div
      className="timeline-chart"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={chartData}>
          <CartesianGrid stroke="rgba(0, 212, 255, 0.2)" />
          <XAxis
            dataKey="year"
            label={{ value: 'Year', position: 'insideBottomRight', offset: -10, fill: '#b0b0b0' }}
            stroke="#b0b0b0"
          />
          <YAxis
            label={{ value: 'Score', angle: -90, position: 'insideLeft', fill: '#b0b0b0' }}
            stroke="#b0b0b0"
          />
          <Tooltip
            contentStyle={{
              background: 'rgba(26, 26, 46, 0.9)',
              border: '1px solid #00d4ff',
              borderRadius: '8px',
              color: '#ffffff',
            }}
            cursor={{ fill: 'rgba(0, 212, 255, 0.1)' }}
          />
          <Legend
            wrapperStyle={{
              color: '#b0b0b0',
              paddingTop: '20px',
            }}
          />
          <Bar dataKey="A" name="Option A" fill="#00d4ff" radius={[8, 8, 0, 0]} />
          <Bar dataKey="B" name="Option B" fill="#ec4899" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default TimelineChart;

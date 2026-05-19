import { useState, useEffect } from 'react';
import initialMockData from '../data/mockData.json';

export const useAppData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Check localStorage first
    const localData = localStorage.getItem('workoutAppData');
    if (localData) {
      setData(JSON.parse(localData));
    } else {
      // Load from mockData.json and save to localStorage
      setData(initialMockData);
      localStorage.setItem('workoutAppData', JSON.stringify(initialMockData));
    }
  }, []);

  const updateAttendance = (date, isCompleted) => {
    if (!data) return;
    
    const newLog = [...data.attendanceLog];
    const existingIndex = newLog.findIndex(log => log.date === date);
    
    if (existingIndex >= 0) {
      newLog[existingIndex].status = isCompleted ? "Completed" : "Missed";
    } else if (isCompleted) {
      newLog.push({ date, status: "Completed" });
    }
    
    const newData = { ...data, attendanceLog: newLog };
    
    // Also update today's workout if it matches the date
    if (data.todayWorkout && data.todayWorkout.date === date) {
      newData.todayWorkout = { ...data.todayWorkout, isCompleted };
    }
    
    setData(newData);
    localStorage.setItem('workoutAppData', JSON.stringify(newData));
  };
  
  const updateExercise = (exerciseId, isCompleted) => {
    if (!data) return;
    
    const newExercises = data.exercises.map(ex => 
      ex.id === exerciseId ? { ...ex, isCompleted } : ex
    );
    
    const newData = { ...data, exercises: newExercises };
    setData(newData);
    localStorage.setItem('workoutAppData', JSON.stringify(newData));
  };

  return { data, updateAttendance, updateExercise };
};

import React from 'react';
import { calculateStreak } from '../utils/streakCalculator';

const AttendanceTracker = ({ attendanceLog, onToggleAttendance }) => {
  const todayStr = new Date().toISOString().split('T')[0];
  const todayLog = attendanceLog.find(log => log.date === todayStr);
  const isCompletedToday = todayLog?.status === "Completed";
  
  const currentStreak = calculateStreak(attendanceLog, todayStr);

  return (
    <div style={{
      backgroundColor: 'var(--glass-bg)',
      border: '1px solid var(--glass-border)',
      borderRadius: 'var(--radius-lg)',
      padding: '1.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      boxShadow: 'var(--shadow-md)'
    }}>
      <div>
        <h2 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Daily Attendance</h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontSize: '1.5rem' }}>🔥</span>
          <span style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{currentStreak} Day Streak</span>
        </div>
      </div>
      
      <button 
        onClick={() => onToggleAttendance(todayStr, !isCompletedToday)}
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          border: 'none',
          backgroundColor: isCompletedToday ? 'var(--accent-secondary)' : 'var(--bg-tertiary)',
          color: 'white',
          fontSize: '1.5rem',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.2s ease-in-out',
          boxShadow: isCompletedToday ? '0 0 15px var(--accent-secondary)' : 'none'
        }}
      >
        {isCompletedToday ? '✓' : ''}
      </button>
    </div>
  );
};

export default AttendanceTracker;

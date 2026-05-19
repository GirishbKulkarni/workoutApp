import React from 'react';
import ExerciseCard from './ExerciseCard';

const ExerciseList = ({ exercises, onToggleExercise }) => {
  if (!exercises || exercises.length === 0) return null;
  
  const completedCount = exercises.filter(e => e.isCompleted).length;
  const progressPercent = Math.round((completedCount / exercises.length) * 100);

  return (
    <div style={{ marginTop: '1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <h2 style={{ fontSize: '1.25rem' }}>Exercises</h2>
        <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
          {completedCount} / {exercises.length} Completed
        </span>
      </div>
      
      {/* Progress Bar */}
      <div style={{ 
        width: '100%', 
        height: '6px', 
        backgroundColor: 'var(--bg-tertiary)', 
        borderRadius: 'var(--radius-sm)',
        marginBottom: '1.5rem',
        overflow: 'hidden'
      }}>
        <div style={{ 
          height: '100%', 
          width: `${progressPercent}%`, 
          backgroundColor: 'var(--accent-secondary)',
          transition: 'width 0.3s ease-out'
        }} />
      </div>

      <div>
        {exercises.map(exercise => (
          <ExerciseCard 
            key={exercise.id} 
            exercise={exercise} 
            onToggle={onToggleExercise} 
          />
        ))}
      </div>
    </div>
  );
};

export default ExerciseList;

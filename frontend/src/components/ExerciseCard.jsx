import React, { useState } from 'react';

const ExerciseCard = ({ exercise, onToggle }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="exercise-card" style={{
      backgroundColor: 'var(--glass-bg)',
      border: '1px solid var(--glass-border)',
      borderRadius: 'var(--radius-md)',
      padding: '1rem',
      marginBottom: '1rem',
      transition: 'all 0.3s ease'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: 1 }}>
          <input 
            type="checkbox" 
            checked={exercise.isCompleted} 
            onChange={(e) => onToggle(exercise.id, e.target.checked)}
            style={{ width: '1.5rem', height: '1.5rem', accentColor: 'var(--accent-secondary)', cursor: 'pointer' }}
          />
          <div style={{ opacity: exercise.isCompleted ? 0.5 : 1 }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem', textDecoration: exercise.isCompleted ? 'line-through' : 'none' }}>
              {exercise.name}
            </h3>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
              {exercise.sets} sets x {exercise.reps} • {exercise.weight} lbs
            </div>
          </div>
        </div>
        
        <button 
          onClick={() => setExpanded(!expanded)}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--accent-primary)',
            cursor: 'pointer',
            padding: '0.5rem',
            fontSize: '1rem'
          }}
        >
          {expanded ? '▲ Hide' : '▼ Info'}
        </button>
      </div>

      {expanded && (
        <div className="exercise-details" style={{
          marginTop: '1rem',
          paddingTop: '1rem',
          borderTop: '1px solid var(--glass-border)',
          display: 'flex',
          gap: '1rem',
          alignItems: 'flex-start'
        }}>
          {exercise.demoThumbnailUrl && (
            <img 
              src={exercise.demoThumbnailUrl} 
              alt={exercise.name} 
              style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: 'var(--radius-sm)' }}
            />
          )}
          <div>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
              <strong style={{ color: 'var(--text-primary)' }}>Rest:</strong> {exercise.restTimerSecs} seconds
            </p>
            <p style={{ fontSize: '0.875rem', lineHeight: '1.5' }}>
              {exercise.instructions}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExerciseCard;

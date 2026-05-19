import React from 'react';

const WorkoutCard = ({ todayWorkout }) => {
  if (!todayWorkout) {
    return (
      <div style={{
        backgroundColor: 'var(--glass-bg)',
        border: '1px solid var(--glass-border)',
        borderRadius: 'var(--radius-lg)',
        padding: '1.5rem',
        textAlign: 'center'
      }}>
        <h2>Rest Day</h2>
        <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Enjoy your recovery!</p>
      </div>
    );
  }

  const { type, targetMuscles, difficulty, estimatedDurationMins, isCompleted } = todayWorkout;

  const typeColors = {
    Push: '#3B82F6',
    Pull: '#8B5CF6',
    Legs: '#EF4444',
    Cardio: '#10B981',
    'Full Body': '#F59E0B'
  };

  return (
    <div style={{
      backgroundColor: 'var(--glass-bg)',
      border: '1px solid var(--glass-border)',
      borderRadius: 'var(--radius-lg)',
      padding: '1.5rem',
      boxShadow: 'var(--shadow-md)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative top bar */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        backgroundColor: typeColors[type] || 'var(--accent-primary)'
      }} />
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
        <div>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>Today's Workout</h2>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
            <span style={{ 
              padding: '0.25rem 0.5rem', 
              borderRadius: 'var(--radius-sm)', 
              backgroundColor: typeColors[type] || 'var(--accent-primary)',
              fontSize: '0.875rem',
              fontWeight: 'bold'
            }}>
              {type}
            </span>
            <span style={{ 
              padding: '0.25rem 0.5rem', 
              borderRadius: 'var(--radius-sm)', 
              backgroundColor: 'var(--bg-tertiary)',
              fontSize: '0.875rem'
            }}>
              {difficulty}
            </span>
            <span style={{ 
              padding: '0.25rem 0.5rem', 
              borderRadius: 'var(--radius-sm)', 
              backgroundColor: 'var(--bg-tertiary)',
              fontSize: '0.875rem'
            }}>
              ⏱ {estimatedDurationMins} min
            </span>
          </div>
        </div>
      </div>
      
      <div style={{ marginTop: '1rem' }}>
        <h3 style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Target Muscles</h3>
        <p style={{ fontWeight: '500' }}>{targetMuscles.join(', ')}</p>
      </div>
    </div>
  );
};

export default WorkoutCard;

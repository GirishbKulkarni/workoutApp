import React from 'react';

const ProgressSnapshot = ({ userProfile }) => {
  const { currentWeight, targetWeight, totalWorkoutsCompleted, weeklyConsistency } = userProfile;

  const quickActions = [
    { label: 'Start Workout', icon: '▶️', color: 'var(--accent-primary)' },
    { label: 'Add Exercise', icon: '➕', color: 'var(--bg-tertiary)' },
    { label: 'History', icon: '📊', color: 'var(--bg-tertiary)' },
    { label: 'Update Weight', icon: '⚖️', color: 'var(--bg-tertiary)' },
    { label: 'AI Plan', icon: '🤖', color: 'var(--bg-tertiary)' }
  ];

  return (
    <div>
      <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Progress Snapshot</h2>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
        gap: '1rem',
        marginBottom: '1.5rem'
      }}>
        <div style={{
          backgroundColor: 'var(--glass-bg)',
          border: '1px solid var(--glass-border)',
          borderRadius: 'var(--radius-md)',
          padding: '1rem',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>Consistency</div>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--accent-secondary)' }}>{weeklyConsistency}%</div>
        </div>
        
        <div style={{
          backgroundColor: 'var(--glass-bg)',
          border: '1px solid var(--glass-border)',
          borderRadius: 'var(--radius-md)',
          padding: '1rem',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>Workouts</div>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{totalWorkoutsCompleted}</div>
        </div>

        <div style={{
          backgroundColor: 'var(--glass-bg)',
          border: '1px solid var(--glass-border)',
          borderRadius: 'var(--radius-md)',
          padding: '1rem',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>Weight</div>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{currentWeight}</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Target: {targetWeight}</div>
        </div>
      </div>

      <h3 style={{ fontSize: '1rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>Quick Actions</h3>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
        gap: '0.5rem'
      }}>
        {quickActions.map((action, idx) => (
          <button key={idx} className="quick-action-btn" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem',
            backgroundColor: action.color,
            border: 'none',
            borderRadius: 'var(--radius-md)',
            padding: '1rem 0.5rem',
            color: 'white',
            cursor: 'pointer',
            transition: 'transform 0.2s ease, filter 0.2s ease'
          }}>
            <span style={{ fontSize: '1.25rem' }}>{action.icon}</span>
            <span style={{ fontSize: '0.75rem', fontWeight: '500' }}>{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProgressSnapshot;

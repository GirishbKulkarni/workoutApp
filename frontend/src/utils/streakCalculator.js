export const calculateStreak = (attendanceLog, currentDateStr) => {
  if (!attendanceLog || attendanceLog.length === 0) return 0;
  
  // Sort descending by date
  const sortedLog = [...attendanceLog]
    .filter(log => log.status === "Completed")
    .sort((a, b) => new Date(b.date) - new Date(a.date));
    
  if (sortedLog.length === 0) return 0;
  
  let streak = 0;
  let currentCheckDate = new Date(currentDateStr);
  currentCheckDate.setHours(0, 0, 0, 0);

  // Check if today is completed
  const firstLogDate = new Date(sortedLog[0].date);
  firstLogDate.setHours(0, 0, 0, 0);
  
  const diffDaysFirst = Math.floor((currentCheckDate - firstLogDate) / (1000 * 60 * 60 * 24));
  
  // If the most recent completion is neither today nor yesterday, streak is broken
  if (diffDaysFirst > 1) {
    return 0;
  }
  
  streak = 1;
  let previousDate = firstLogDate;
  
  for (let i = 1; i < sortedLog.length; i++) {
    const logDate = new Date(sortedLog[i].date);
    logDate.setHours(0, 0, 0, 0);
    
    const diffDays = Math.floor((previousDate - logDate) / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) {
      streak++;
      previousDate = logDate;
    } else if (diffDays === 0) {
      // Multiple logs on the same day? Ignore.
      continue;
    } else {
      // Gap found, streak broken
      break;
    }
  }
  
  return streak;
};

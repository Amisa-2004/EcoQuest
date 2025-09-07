  // Example: store completed chapters in localStorage or get from backend
  // For demo, assume chapters completed is 0 to 3
  const completed = getCompletedChapters();
  console.log('Chapters completed:', completed);

  const chaptersCompleted = parseInt(localStorage.getItem('chaptersCompleted')) || 0;
  
  // Array of tree images representing growth stages
  const treeStages = [
    'tree-stage1.png', // no chapter completed (seedling)
    'tree-stage2.png', // after chapter 1
    'tree-stage3.png', // after chapter 2
    'tree-stage4.png', // after chapter 3 etc.
  ];
  
  // Update tree image source based on chapters completed
  const treeImg = document.getElementById('tree-img');
  
  // Clamp completed chapters to index in array size
  const stage = Math.min(chaptersCompleted, treeStages.length - 1);
  treeImg.src = treeStages[stage];

const allTraits = [
  'Adventurous', 'Curious', 'Energetic', 'Creative', 'Shy',
  'Talkative', 'Helpful', 'Playful', 'Imaginative', 'Independent',
  'Calm', 'Sporty', 'Gentle', 'Musical', 'Outdoorsy'
];

function populatePersonalitySelect() {
  const select = document.getElementById('kidsPersonality');
  if (!select) return;

  allTraits.forEach(trait => {
    const opt = document.createElement('option');
    opt.value = trait.toLowerCase();
    opt.textContent = trait;
    select.appendChild(opt);
  });
}

document.addEventListener('DOMContentLoaded', populatePersonalitySelect);

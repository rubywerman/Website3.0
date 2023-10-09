import { React, useState } from 'react';
import Sentence from './Sentence';

const SentencesList = () => {
  const sentences = [
    { sentence: 'Writes code.', triggerWord: 'code', content: 'I\'m a software engineer at Tableau in core services.' },
    { sentence: 'Makes filters.', triggerWord: 'filters', content: 'I create augmented reality filters for Instagram, Tiktok, and Snapchat. I\'m in the top 1% of Tiktok effect creators. My filters have millions of impressions worldwide.' },
    { sentence: 'Has work experience.', triggerWord: 'experience', content: ["test", "test1"] },
    { sentence: 'And done projects.', triggerWord: 'projects', content: 'This is the new sentence for filters.' }
  ];

  const [openStates, setOpenStates] = useState(Array(sentences.length).fill(false));

  const toggleAll = () => {
    const areAllOpen = openStates.every(state => state);
    setOpenStates(Array(sentences.length).fill(!areAllOpen));
  };

  const toggleDropdown = index => {
    const newOpenStates = [...openStates];
    newOpenStates[index] = !newOpenStates[index];
    setOpenStates(newOpenStates);
  };


  console.log(openStates.every(state => state));
  return (
    <div className="sentences-list">
      {sentences.map((sentenceData, index) => (
        <Sentence
          key={index}
          {...sentenceData}
          isOpen={openStates[index]}
          toggleDropdown={() => toggleDropdown(index)}
        />
      ))}
      <img
        className='button'
        src={!openStates.every(state => state) ? '/egg.png' : '/cracked.png'}
        alt={'egg'}
        onClick={toggleAll}
      /> 
      </div>
  );
};

export default SentencesList;
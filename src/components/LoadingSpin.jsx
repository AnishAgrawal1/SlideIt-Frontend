import React from 'react';
import { Fragment,useState, useEffect } from 'react';
import { Spinner, Text, VStack } from '@chakra-ui/react';

const LoadingSpin = () => {
    const [fact, setFact] = useState('');

  useEffect(() => {
    const facts = [
        'Did you know that cats can jump up to six times their length in one leap?',
        'Did you know that the shortest war in history lasted only 38 minutes?',
        'Did you know that the Mona Lisa has no eyebrows?',
        'Did you know that a cockroach can live for several weeks without its head?',
        'Did you know that a sneeze can travel up to 100 miles per hour?',
        'Did you know that a group of flamingos is called a flamboyance?',
        'Did you know that a kangaroo cannot jump if its tail is lifted off the ground?',
        'Did you know that a crocodile cannot move its tongue?',
        'Did you know that a group of owls is called a parliament?',
        'Did you know that a group of ferrets is called a business?',
        'Did you know that a group of jellyfish is called a smack?',
        "Did you know that the world's oldest piece of chewing gum is over 9,000 years old?",
        'Did you know that the shortest war in history was between Britain and Zanzibar in 1896? It lasted only 38 minutes!',
        "Did you know that the world's largest snowflake was recorded in Montana in 1887 and was 15 inches wide and 8 inches thick?",
        'Did you know that a group of hedgehogs is called a prickle?',
        "Did you know that the world's largest pumpkin weighed over 1,800 pounds?",
        'Did you know that a group of crows is called a murder?',
        'Did you know that the longest word in the English language has 189,819 letters and would take over 3 hours to pronounce?',
        'Did you know that honey never spoils and can last for centuries if stored properly?',
        'Did you know that the tallest man in recorded history was 8 feet 11 inches tall?',
        'Did you know that a group of pugs is called a grumble?',
        'Did you know that the shortest verse in the Bible is "Jesus wept"?',
        'Did you know that a group of flamingos can bend their legs backwards at the knee?',
        'Did you know that the first recorded use of the word "computer" was in 1613 to refer to a person who performed calculations?',
        'Did you know that a group of skunks is called a stench?',
    ];
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    setFact(randomFact);
  }, []);

  return (
    <Fragment>
      <div className="fixed z-50 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen">
          <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
          <div className="z-50">
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 mr-4">
                <Spinner size="xl" color={"#00df9a"} />
              </div>
              <VStack>
              <h2 className="text-white font-bold text-xl tracking-wide">Generating Slides</h2>
              <Text className="text-white text-sm">Estimated time is less than 2 minutes.</Text>
              </VStack>
            </div>
            <div className="flex items-center justify-center pt-5">
                <h2 className="text-[#00df9a] md:text-lg text-sm mt-2 pl-8">{fact}</h2>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LoadingSpin;

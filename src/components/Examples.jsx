import { useState } from 'react';
import { EXAMPLES } from '../data';
import { Section } from '../components/Section.jsx';
import { TabButton } from './TabButton';

export const Examples = () => {
    const [selectedTopic, setSelectedTopic] = useState();

    const handleClick = (selectedButton) => {
        setSelectedTopic(selectedButton);
        console.log(selectedTopic);
    };
    let tabContent = <p>Please select a topic.</p>;

    if (selectedTopic) {
       tabContent = (
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
      );
    }

    return (
        <Section id="examples">
            <h2>Examples</h2>
            <menu>
                <TabButton
                    isSelected={selectedTopic === 'components'}
                    onClick={() => handleClick('components')}
                >
                    Components
                </TabButton>
                <TabButton
                    isSelected={selectedTopic === 'jsx'}
                    onClick={() => handleClick('jsx')}
                >
                    JSX
                </TabButton>
                <TabButton
                    isSelected={selectedTopic === 'props'}
                    onClick={() => handleClick('props')}
                >
                    Props
                </TabButton>
                <TabButton
                    isSelected={selectedTopic === 'state'}
                    onClick={() => handleClick('state')}
                >
                    State
                </TabButton>
            </menu>
            {tabContent}
        </Section>
    );
};
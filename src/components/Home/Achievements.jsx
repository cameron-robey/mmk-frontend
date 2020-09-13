import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

// Contexts
import { serverPath } from './../../api/config';

// Styles
import * as styles from './styles/AchievementsStyles';

const Achievements = ({data, ...props}) => {
  const [displayData, setDisplayData] = useState(undefined);

  const [counterToggle, setCounterToggle] = useState(false);

  useEffect(() => {
    setDisplayData(data);
  }, [data]);


  if (displayData === undefined) return null;

  return <>
    <styles.MainWrapper>
      <styles.ContentWrapper>
        <styles.SectionTitle>Achievements</styles.SectionTitle>
        
        <styles.Title>{displayData?.achievements_title}</styles.Title>

        <styles.Achievements>
          {
            displayData.achievements?.map( (achievement, index) => <>
              <styles.AchievementWrapper key={index}>
                <styles.AchievementNumber>
                  <CountUp start={counterToggle ? null : 0} end={achievement.achievement_value} redraw={true}>
                    {({ countUpRef }) => (
                      <VisibilitySensor
                        onChange={
                          isVisible => {
                            if (isVisible) {
                              setCounterToggle(true);
                              }
                            }
                          }
                        delayedCall
                      >
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>  
                  {(achievement.type === 'plus' ? '+' : '')}
                </styles.AchievementNumber>
                <styles.AchievementText>{achievement.achievement_text}</styles.AchievementText>
              </styles.AchievementWrapper>
            </> )
          }
        </styles.Achievements>
      </styles.ContentWrapper>
    </styles.MainWrapper>
  </>
}

export default Achievements;
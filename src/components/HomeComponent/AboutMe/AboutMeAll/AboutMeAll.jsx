import React from 'react';
import PersonalInfo from '../PersonalInfo/PersonalInfo';
import Qualification from '../Qulification/Qualification';
import QulificationTitle from '../Qulification/QulificationTitle';
import Skill from '../Skill/Skill';
import SkillTitle from '../Skill/SkillTitle';
import Certificate from '../../Certificate/Certificate';
import Project from '../../Project/Project';



const AboutMeAll = () => {
    return (
        <div>
            <PersonalInfo></PersonalInfo>
            <QulificationTitle></QulificationTitle>
            <Qualification></Qualification>
            <SkillTitle></SkillTitle>
            <Skill></Skill>
            <Certificate></Certificate>
            <Project></Project>
            
        </div>
    );
};

export default AboutMeAll;
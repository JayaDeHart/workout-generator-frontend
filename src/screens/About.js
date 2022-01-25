import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Headline, Paragraph } from 'react-native-paper';

import React from 'react';

const About = () => {
  return (
    <ScrollView>
      <Headline>Overview</Headline>
      <Paragraph>
        This app is designed to generate a linearly periodized training program
        based on One Rep Maximum (ORM) data. The plan is 9 weeks long and is
        comprised of a 4 week hypertrophy cycle, a deload week, and a 4 week
        strength cycle.
      </Paragraph>
      <Headline>Why Periodization</Headline>
      <Paragraph>
        Periodization is a method of training intended to produce improvements
        in performance rapidly by altering the training stimulus. The body can
        become aclimated to a repetitive scheme of sets, reps and training
        goals, and improvements in performance can stagnate. In this program, we
        begin by training for hypertrophy. Rep ranges of 10 - 14 have been shown
        to result in the greatest increases in cross sectional muscle area. This
        phase can be thought of as targeting mainly a physiological response.
      </Paragraph>
      <Headline>Why Linear</Headline>
      <Paragraph>
        Linear periodization is a form of periodization that perscribes a set
        increase in exercise intensity each week. Although effective, research
        has suggested that non-linear or "block" periodization can be more
        effective for some athletes. However, the limitations of algorithmically
        generating a program have restricted me to a linear progression pattern.
        For all but elite athletes, a linear program will still have much to
        offer you.
      </Paragraph>
      <Headline>Program Generation</Headline>
      <Paragraph>
        This program uses a number of formulas and concepts to generate a
        periodized workout plan. The Epley formula: "ORM = weight × (1 + 0.0333
        × reps)" is used to convert ORMs to different rep schemes. The concepts
        of volume (sets x reps) and intensity (reps x weight) are also used. A
        linear increase in intensity alongside a decrease in volume over the
        duration of the plan is used to generate the sets, reps and weight for
        each week of the program.
      </Paragraph>
      <Headline>Future Goals</Headline>
      <Paragraph>
        -Allow users to modify intensity slope by selecting an experience level{' '}
        {'\n'}
        -Allow users to input their own exercises {'\n'}
        -Allow users to design own set / rep schemes {'\n'}
        -Include accessory exercises
      </Paragraph>
    </ScrollView>
  );
};

export default About;

const styles = StyleSheet.create({});

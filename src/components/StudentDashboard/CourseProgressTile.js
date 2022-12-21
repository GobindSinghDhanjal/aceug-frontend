import React, { useState } from 'react';
import { Card, Flex, Text, ProgressBar, Title, Metric, Badge } from "@tremor/react";
import { Button } from "@tremor/react";

export const CourseProgressTile = (course) => {

    const [currentLesson, setCurrentLesson] = useState(14);
    const [ totalLesson , setTotalLesson] = useState(16);
  return (
    <>
     <Card maxWidth="max-w-sm " decoration="top" decorationColor="indigo">
    <Flex>
      <Metric>{course.course.name}</Metric>
      <Badge text="expires in 4 days" size="md" />
    </Flex>
    <Flex>
    <Title> {currentLesson} / {totalLesson}</Title>
    </Flex>
    <ProgressBar percentageValue={(currentLesson/totalLesson)*100} color="indigo" marginTop="mt-2" />
    <Button
      size="md"
      marginTop="mt-3"
      importance="primary"
      text="Continue"
      handleClick={() => console.log("clicked")}
    />
  </Card>
    </>
  )
}

import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Exam from "../entities/Exam";
import Category from "../entities/Category";
import Course from "../entities/Course";
import User from "../entities/User";

export async function getExams () {
  const exams = await getRepository(Exam).find({
    select: ["id", "name", "url", "description"],
    relations: ['course', 'category', 'user']
  });
  
  return exams;
}

export async function postExam (name: string, url: string, description: string, courseId: number, categoryId: number, userId: number) {
  const course = await getRepository(Course).findOne({
    where: { id: courseId },
    relations: ['exams']
  });
  const category = await getRepository(Category).findOne({
    where: { id: categoryId },
    relations: ['exams']
  });
  const user = await getRepository(User).findOne({
    where: { id: userId },
    relations: ['exams']
  });
  const exam = await getRepository(Exam).create({
    name: name,
    url: url,
    description: description,
    courseId: courseId,
    categoryId: categoryId,
    userId: userId
  });
  course.exams.push(exam)
  category.exams.push(exam)
  user.exams.push(exam)
  await getRepository(Exam).save(exam);
  await getRepository(User).save(user);
  await getRepository(Course).save(course);
  await getRepository(Category).save(category);
  return exam;
}

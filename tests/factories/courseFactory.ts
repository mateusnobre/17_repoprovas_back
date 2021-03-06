import { getRepository } from "typeorm";
import faker from 'faker';
import Course from "../../src/entities/Course";
import Lecturer from '../../src/entities/Lecturer'

export async function createCourse () {
  const course = await getRepository(Course).create({
    name: faker.name.findName(),
  });
  await getRepository(Course).save(course);
  return course;
}

export const user = {
  name: "Иван Иванов",
  courses: [
    {
      name: "web программирование",
      progress: 34
    },
    {
      name: "ООП",
      progress: 87
    }
  ]
};

const AllUserCourses = {
  courses: [
    {
      id: 0,
      name: "Базы данных",
      teacher: "Иванов Иван",
      progress: 40
    },
    {
      id: 1,
      name: "ООП",
      teacher: "Петров Пётр",
      progress: 70
    },
    {
      id: 2,
      name: "Функциональное программирование",
      teacher: "Иванов Иван",
      progress: 70
    }
  ]
};

export class DataService {
  getAllUserCourses() {
    return AllUserCourses;
  }
}

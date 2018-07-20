import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
@Injectable()
export class UrlService {
   constructor() {
   }
//    serverUrl: string ="http://mtpc583:8080/api";
//    getUrlUsers(): string {
//       return this.serverUrl + "/secure/user/";
//    }

   urlExample: string="https://jsonplaceholder.typicode.com/users";
   getUrlExample():string{
       return this.urlExample;
   }
<<<<<<< HEAD
   
   urlTeam: string="https://jsonplaceholder.typicode.com/users";
   getUrlTeam():string{
       return this.urlTeam;
||||||| merged common ancestors

   getUrlUserById(id: number): string {
       return this.serverUrl + "/secure/user/"+id;
=======

   urlAdvClaimer: string="https://jsonplaceholder.typicode.com/users";
   getUrlAdvClaimer():string{
       return this.urlAdvClaimer;
>>>>>>> 2120ffc3caf34331fdf0e7fab8bb92d80033b618
   }

<<<<<<< HEAD
   urlEmployee: string="https://jsonplaceholder.typicode.com/users";
   getUrlEmployee():string{
       return this.urlEmployee;
   }
   
||||||| merged common ancestors
   postUrlAddUser(): string {
       return this.serverUrl + "/secure/user/add/";
   }
=======
//    getUrlUserById(id: number): string {
//        return this.serverUrl + "/secure/user/"+id;
//    }
>>>>>>> 2120ffc3caf34331fdf0e7fab8bb92d80033b618

<<<<<<< HEAD
||||||| merged common ancestors
   getUrlGrade(): string {
       return this.serverUrl + "/secure/user/grade/";
   }
=======
//    postUrlAddUser(): string {
//        return this.serverUrl + "/secure/user/add/";
//    }
>>>>>>> 2120ffc3caf34331fdf0e7fab8bb92d80033b618

<<<<<<< HEAD
//    getUrlUserById(id: number): string {
//        return this.serverUrl + "/secure/user/"+id;
//    }
||||||| merged common ancestors
   getUrlLocation(): string {
       return this.serverUrl + "/secure/user/location/";
   }
=======
//    getUrlGrade(): string {
//        return this.serverUrl + "/secure/user/grade/";
//    }
>>>>>>> 2120ffc3caf34331fdf0e7fab8bb92d80033b618

<<<<<<< HEAD
//    postUrlAddUser(): string {
//        return this.serverUrl + "/secure/user/add/";
//    }
||||||| merged common ancestors
   postUrlEditActiveUser(idUser: number): string {
       return this.serverUrl + "/secure/user/"+idUser+"/edit/active/";
   }
=======
//    getUrlLocation(): string {
//        return this.serverUrl + "/secure/user/location/";
//    }
>>>>>>> 2120ffc3caf34331fdf0e7fab8bb92d80033b618

<<<<<<< HEAD
//    getUrlGrade(): string {
//        return this.serverUrl + "/secure/user/grade/";
//    }
||||||| merged common ancestors
   postUrlEditRolesUser(idUser: number): string {
       return this.serverUrl + "/secure/user/"+idUser+"/edit/roles/";
   }
=======
//    postUrlEditActiveUser(idUser: number): string {
//        return this.serverUrl + "/secure/user/"+idUser+"/edit/active/";
//    }
>>>>>>> 2120ffc3caf34331fdf0e7fab8bb92d80033b618

<<<<<<< HEAD
//    getUrlLocation(): string {
//        return this.serverUrl + "/secure/user/location/";
//    }
||||||| merged common ancestors
   getUrlAuth(): string {
       return this.serverUrl + "/auth/";
   }
=======
//    postUrlEditRolesUser(idUser: number): string {
//        return this.serverUrl + "/secure/user/"+idUser+"/edit/roles/";
//    }
>>>>>>> 2120ffc3caf34331fdf0e7fab8bb92d80033b618

<<<<<<< HEAD
//    postUrlEditActiveUser(idUser: number): string {
//        return this.serverUrl + "/secure/user/"+idUser+"/edit/active/";
//    }
||||||| merged common ancestors
   getUrlPeriod(): string {
       return this.serverUrl + "/secure/period/";
   }
=======
//    getUrlAuth(): string {
//        return this.serverUrl + "/auth/";
//    }
>>>>>>> 2120ffc3caf34331fdf0e7fab8bb92d80033b618

<<<<<<< HEAD
//    postUrlEditRolesUser(idUser: number): string {
//        return this.serverUrl + "/secure/user/"+idUser+"/edit/roles/";
//    }
||||||| merged common ancestors
   postPeriodData(): string {
        return this.serverUrl + "/secure/period/add/"
   }
=======
//    getUrlPeriod(): string {
//        return this.serverUrl + "/secure/period/";
//    }
>>>>>>> 2120ffc3caf34331fdf0e7fab8bb92d80033b618

<<<<<<< HEAD
//    getUrlAuth(): string {
//        return this.serverUrl + "/auth/";
//    }
||||||| merged common ancestors
   postEditPeriod(id: number): string {
       return this.serverUrl + "/secure/period/"+id+"/edit/";
   }
=======
//    postPeriodData(): string {
//         return this.serverUrl + "/secure/period/add/"
//    }
>>>>>>> 2120ffc3caf34331fdf0e7fab8bb92d80033b618

<<<<<<< HEAD
//    getUrlPeriod(): string {
//        return this.serverUrl + "/secure/period/";
//    }
||||||| merged common ancestors
   deleteUrlPeriod(id:number): string {
       return this.serverUrl + "/secure/period/"+id+"/delete/";
   }
=======
//    postEditPeriod(id: number): string {
//        return this.serverUrl + "/secure/period/"+id+"/edit/";
//    }
>>>>>>> 2120ffc3caf34331fdf0e7fab8bb92d80033b618

<<<<<<< HEAD
//    postPeriodData(): string {
//         return this.serverUrl + "/secure/period/add/"
//    }
||||||| merged common ancestors
   getUrlElligibleParticipants(id:number): string {
        return this.serverUrl + "/secure/period/"+id+"/eligible/";
=======
//    deleteUrlPeriod(id:number): string {
//        return this.serverUrl + "/secure/period/"+id+"/delete/";
//    }
>>>>>>> 2120ffc3caf34331fdf0e7fab8bb92d80033b618

<<<<<<< HEAD
//    postEditPeriod(id: number): string {
//        return this.serverUrl + "/secure/period/"+id+"/edit/";
//    }
||||||| merged common ancestors
   }
=======
//    getUrlElligibleParticipants(id:number): string {
//         return this.serverUrl + "/secure/period/"+id+"/eligible/";
>>>>>>> 2120ffc3caf34331fdf0e7fab8bb92d80033b618

<<<<<<< HEAD
//    deleteUrlPeriod(id:number): string {
//        return this.serverUrl + "/secure/period/"+id+"/delete/";
//    }
||||||| merged common ancestors
   getUrlListUserForElligibleParticipants(id:number): string {
       return this.serverUrl + "/secure/user/eligible/"+id;
   }
=======
//    }
>>>>>>> 2120ffc3caf34331fdf0e7fab8bb92d80033b618

<<<<<<< HEAD
//    getUrlElligibleParticipants(id:number): string {
//         return this.serverUrl + "/secure/period/"+id+"/eligible/";
||||||| merged common ancestors
   postElligibleParticipant(id:number): string {
       return this.serverUrl + "/secure/period/"+id+"/eligible/add/";
   }
=======
//    getUrlListUserForElligibleParticipants(id:number): string {
//        return this.serverUrl + "/secure/user/eligible/"+id;
//    }
>>>>>>> 2120ffc3caf34331fdf0e7fab8bb92d80033b618

<<<<<<< HEAD
//    }
||||||| merged common ancestors
   deleteUrlElligibleParticipant(id:number, participantsId): string {
        return this.serverUrl + "/secure/period/"+id+"/eligible/delete/"+participantsId;
    }
=======
//    postElligibleParticipant(id:number): string {
//        return this.serverUrl + "/secure/period/"+id+"/eligible/add/";
//    }
>>>>>>> 2120ffc3caf34331fdf0e7fab8bb92d80033b618

<<<<<<< HEAD
//    getUrlListUserForElligibleParticipants(id:number): string {
//        return this.serverUrl + "/secure/user/eligible/"+id;
//    }
||||||| merged common ancestors
   getUrlCourseList(id:number): string {
       return this.serverUrl + "/secure/period/"+id+"/course";
    }
=======
//    deleteUrlElligibleParticipant(id:number, participantsId): string {
//         return this.serverUrl + "/secure/period/"+id+"/eligible/delete/"+participantsId;
//     }
>>>>>>> 2120ffc3caf34331fdf0e7fab8bb92d80033b618

<<<<<<< HEAD
//    postElligibleParticipant(id:number): string {
//        return this.serverUrl + "/secure/period/"+id+"/eligible/add/";
//    }
||||||| merged common ancestors
    deleteUrlCourseList(id:number, courseId:number): string {
        return this.serverUrl + "/secure/period/"+id+"/course/delete/"+courseId;
    }
=======
//    getUrlCourseList(id:number): string {
//        return this.serverUrl + "/secure/period/"+id+"/course";
//     }
>>>>>>> 2120ffc3caf34331fdf0e7fab8bb92d80033b618

<<<<<<< HEAD
//    deleteUrlElligibleParticipant(id:number, participantsId): string {
//         return this.serverUrl + "/secure/period/"+id+"/eligible/delete/"+participantsId;
//     }
||||||| merged common ancestors
   postUrlAddCourse(id:number): string {
       return this.serverUrl + "/secure/period/"+id+"/course/add";
   }
=======
//     deleteUrlCourseList(id:number, courseId:number): string {
//         return this.serverUrl + "/secure/period/"+id+"/course/delete/"+courseId;
//     }
>>>>>>> 2120ffc3caf34331fdf0e7fab8bb92d80033b618

<<<<<<< HEAD
//    getUrlCourseList(id:number): string {
//        return this.serverUrl + "/secure/period/"+id+"/course";
//     }
||||||| merged common ancestors
   getUrlListTrainer(): string {
    return this.serverUrl + "/secure/user/trainer";
   }
=======
//    postUrlAddCourse(id:number): string {
//        return this.serverUrl + "/secure/period/"+id+"/course/add";
//    }
>>>>>>> 2120ffc3caf34331fdf0e7fab8bb92d80033b618

<<<<<<< HEAD
//     deleteUrlCourseList(id:number, courseId:number): string {
//         return this.serverUrl + "/secure/period/"+id+"/course/delete/"+courseId;
//     }
||||||| merged common ancestors
   getUrlListForAddCourse(): string {
       return this.serverUrl + "/secure/period/course";
   }
=======
//    getUrlListTrainer(): string {
//     return this.serverUrl + "/secure/user/trainer";
//    }

//    getUrlListForAddCourse(): string {
//        return this.serverUrl + "/secure/period/course";
//    }
>>>>>>> 2120ffc3caf34331fdf0e7fab8bb92d80033b618

<<<<<<< HEAD
//    postUrlAddCourse(id:number): string {
//        return this.serverUrl + "/secure/period/"+id+"/course/add";
//    }
||||||| merged common ancestors
   getUrlClassRoom(): string {
        return this.serverUrl + "/secure/period/classroom";
    }
=======
//    getUrlClassRoom(): string {
//         return this.serverUrl + "/secure/period/classroom";
//     }
>>>>>>> 2120ffc3caf34331fdf0e7fab8bb92d80033b618

<<<<<<< HEAD
//    getUrlListTrainer(): string {
//     return this.serverUrl + "/secure/user/trainer";
//    }
||||||| merged common ancestors
   getUrlDetailCourse(idTraining: number, idCourse: number): string {
       return this.serverUrl + "/secure/period/"+idTraining+"/course/"+idCourse;
   } 
=======
//    getUrlDetailCourse(idTraining: number, idCourse: number): string {
//        return this.serverUrl + "/secure/period/"+idTraining+"/course/"+idCourse;
//    } 
>>>>>>> 2120ffc3caf34331fdf0e7fab8bb92d80033b618

<<<<<<< HEAD
//    getUrlListForAddCourse(): string {
//        return this.serverUrl + "/secure/period/course";
//    }
||||||| merged common ancestors
   postEditCourse(idTraining:number, idCourse:number): string {
    return this.serverUrl + "/secure/period/"+idTraining+"/course/"+idCourse+"/edit"; 
    }
=======
//    postEditCourse(idTraining:number, idCourse:number): string {
//     return this.serverUrl + "/secure/period/"+idTraining+"/course/"+idCourse+"/edit"; 
//     }
>>>>>>> 2120ffc3caf34331fdf0e7fab8bb92d80033b618

<<<<<<< HEAD
//    getUrlClassRoom(): string {
//         return this.serverUrl + "/secure/period/classroom";
//     }
||||||| merged common ancestors
   getUrlListUserForEnrollParticipants(idTraining:number, idCourse:number): string {
        return this.serverUrl + "/secure/period/"+idTraining+"/course/"+idCourse+"/eligible/"; 
    }
=======
//    getUrlListUserForEnrollParticipants(idTraining:number, idCourse:number): string {
//         return this.serverUrl + "/secure/period/"+idTraining+"/course/"+idCourse+"/eligible/"; 
//     }
>>>>>>> 2120ffc3caf34331fdf0e7fab8bb92d80033b618

<<<<<<< HEAD
//    getUrlDetailCourse(idTraining: number, idCourse: number): string {
//        return this.serverUrl + "/secure/period/"+idTraining+"/course/"+idCourse;
//    } 
||||||| merged common ancestors
    postEnrollParticipant(idTraining:number, idCourse:number): string {
        return this.serverUrl + "/secure/period/"+idTraining+"/course/"+idCourse+"/eligible/add"; 
    }
=======
//     postEnrollParticipant(idTraining:number, idCourse:number): string {
//         return this.serverUrl + "/secure/period/"+idTraining+"/course/"+idCourse+"/eligible/add"; 
//     }
>>>>>>> 2120ffc3caf34331fdf0e7fab8bb92d80033b618

<<<<<<< HEAD
//    postEditCourse(idTraining:number, idCourse:number): string {
//     return this.serverUrl + "/secure/period/"+idTraining+"/course/"+idCourse+"/edit"; 
//     }
||||||| merged common ancestors
    getUrlEnrollment(): string {
        return this.serverUrl + "/secure/enrollment";
    }
=======
//     getUrlEnrollment(): string {
//         return this.serverUrl + "/secure/enrollment";
//     }
>>>>>>> 2120ffc3caf34331fdf0e7fab8bb92d80033b618

<<<<<<< HEAD
//    getUrlListUserForEnrollParticipants(idTraining:number, idCourse:number): string {
//         return this.serverUrl + "/secure/period/"+idTraining+"/course/"+idCourse+"/eligible/"; 
//     }
||||||| merged common ancestors
    getUrlAchievementList(idRole:number): string {
        return this.serverUrl + "/secure/achievement/"+idRole;
    }
=======
//     getUrlAchievementList(idRole:number): string {
//         return this.serverUrl + "/secure/achievement/"+idRole;
//     }
>>>>>>> 2120ffc3caf34331fdf0e7fab8bb92d80033b618

<<<<<<< HEAD
//     postEnrollParticipant(idTraining:number, idCourse:number): string {
//         return this.serverUrl + "/secure/period/"+idTraining+"/course/"+idCourse+"/eligible/add"; 
//     }
||||||| merged common ancestors
    postUrlEditAchievement(idUser:number): string {
        return this.serverUrl + "/secure/achievement/"+idUser+"/edit";
    }
=======
//     postUrlEditAchievement(idUser:number): string {
//         return this.serverUrl + "/secure/achievement/"+idUser+"/edit";
//     }
>>>>>>> 2120ffc3caf34331fdf0e7fab8bb92d80033b618

<<<<<<< HEAD
//     getUrlEnrollment(): string {
//         return this.serverUrl + "/secure/enrollment";
//     }
||||||| merged common ancestors
    getUrlMaintenancetList(activeRole: number): string {
        return this.serverUrl + "/secure/maintenance/"+activeRole; 
    }
=======
//     getUrlMaintenancetList(activeRole: number): string {
//         return this.serverUrl + "/secure/maintenance/"+activeRole; 
//     }
>>>>>>> 2120ffc3caf34331fdf0e7fab8bb92d80033b618

<<<<<<< HEAD
//     getUrlAchievementList(idRole:number): string {
//         return this.serverUrl + "/secure/achievement/"+idRole;
//     }
||||||| merged common ancestors
    getUrlAttendanceList(id:number): string {
        return this.serverUrl + "/secure/maintenance/"+id+"/attendance/";
    }
=======
//     getUrlAttendanceList(id:number): string {
//         return this.serverUrl + "/secure/maintenance/"+id+"/attendance/";
//     }
>>>>>>> 2120ffc3caf34331fdf0e7fab8bb92d80033b618

<<<<<<< HEAD
//     postUrlEditAchievement(idUser:number): string {
//         return this.serverUrl + "/secure/achievement/"+idUser+"/edit";
//     }
||||||| merged common ancestors
    getUrlListPersonForAttendance(coursePeriodId:number, scheduleId: number): string {
        return this.serverUrl + "/secure/maintenance/"+coursePeriodId+"/attendance/"+scheduleId;
    }
=======
//     getUrlListPersonForAttendance(coursePeriodId:number, scheduleId: number): string {
//         return this.serverUrl + "/secure/maintenance/"+coursePeriodId+"/attendance/"+scheduleId;
//     }
>>>>>>> 2120ffc3caf34331fdf0e7fab8bb92d80033b618

<<<<<<< HEAD
//     getUrlMaintenancetList(activeRole: number): string {
//         return this.serverUrl + "/secure/maintenance/"+activeRole; 
//     }
||||||| merged common ancestors
    postUrlEditAttendance(coursePeriodId:number, scheduleId: number): string {
        return this.serverUrl + "/secure/maintenance/"+coursePeriodId+"/attendance/"+scheduleId+"/edit";
    }
=======
//     postUrlEditAttendance(coursePeriodId:number, scheduleId: number): string {
//         return this.serverUrl + "/secure/maintenance/"+coursePeriodId+"/attendance/"+scheduleId+"/edit";
//     }
>>>>>>> 2120ffc3caf34331fdf0e7fab8bb92d80033b618

<<<<<<< HEAD
//     getUrlAttendanceList(id:number): string {
//         return this.serverUrl + "/secure/maintenance/"+id+"/attendance/";
//     }
||||||| merged common ancestors
    getUrlListPersonForAssessment(coursePeriodId:number): string {
        return this.serverUrl + "/secure/maintenance/"+coursePeriodId+"/assessment/";
    }
=======
//     getUrlListPersonForAssessment(coursePeriodId:number): string {
//         return this.serverUrl + "/secure/maintenance/"+coursePeriodId+"/assessment/";
//     }
>>>>>>> 2120ffc3caf34331fdf0e7fab8bb92d80033b618

<<<<<<< HEAD
//     getUrlListPersonForAttendance(coursePeriodId:number, scheduleId: number): string {
//         return this.serverUrl + "/secure/maintenance/"+coursePeriodId+"/attendance/"+scheduleId;
//     }

//     postUrlEditAttendance(coursePeriodId:number, scheduleId: number): string {
//         return this.serverUrl + "/secure/maintenance/"+coursePeriodId+"/attendance/"+scheduleId+"/edit";
//     }

//     getUrlListPersonForAssessment(coursePeriodId:number): string {
//         return this.serverUrl + "/secure/maintenance/"+coursePeriodId+"/assessment/";
//     }

//     postUrlEditAssessment(coursePeriodId:number): string {
//         return this.serverUrl + "/secure/maintenance/"+coursePeriodId+"/assessment/edit";
//     }
||||||| merged common ancestors
    postUrlEditAssessment(coursePeriodId:number): string {
        return this.serverUrl + "/secure/maintenance/"+coursePeriodId+"/assessment/edit";
    }
=======
//     postUrlEditAssessment(coursePeriodId:number): string {
//         return this.serverUrl + "/secure/maintenance/"+coursePeriodId+"/assessment/edit";
//     }
>>>>>>> 2120ffc3caf34331fdf0e7fab8bb92d80033b618
    
//    getUrlActiveTraining(): string {
//         return this.serverUrl + "/secure/dashboard/active";
//    }

//    getUrlBCCShedule(): string {
//         return this.serverUrl + "/secure/dashboard/bcc";
//    }
   


}
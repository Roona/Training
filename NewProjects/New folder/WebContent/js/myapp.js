var app = angular.module('myModule',[]);

var mycontroller = function($scope){

	/*var studentArr =[
{ name: 'zayn', age: 1, subject:['englesh','tamil'] },
{ name: 'sofia', age: 2 },
{ name: 'sana', age: 3 }
	                 ];
	$scope.students=studentArr*/
	/*var student={};
	student.name="zayn";
	student.age=1;
$scope.studentobj=student;
//	$scope.name="zayn";
*/
	
	var engagement ={
		    "statusCode": 0,
		    "configDetailList": [
		        {
		            "supportAssignorName": "Frank",
		            "configStatus": "Completed",
		            "registrationKey": "cap111",
		            "applicationName": "ApurvWithCapacity_1212_2016-03-17T04:00:00.000Z",
		            "configName": "ApurvWithCapacity",
		            "engagementQuestions": [
		               "1","2","3"
		            ],
		            "dataDetails": {
		                "itgField": "1212",
		                "mgrField": "Glenn",
		                "projectDescription": "",
		                "targetDate": "2016-03-17T04:00:00.000Z",
		                "eai": [
		                    "123",
		                    "456",
		                    "246",
		                    "111"
		                ]
		            },
		            "capacityPlanData": {
		                "engagementType": "Capacity Plan",
		                "capacityPlanQuestions": [
		                    0,2
		                ],
		                "requestTitle": "Cap Title",
		                "requestDescription": "Capacity Request Description Updated",
		                "serverHostNames": [
		                    "test1.fedex.com",
		                    "test2.fedex.com",
		                    "test3.fedex.com"
		                ]
		            }
		        },
		        {
		            "supportAssignorName": "Frank",
		            "configStatus": "Draft",
		            "registrationKey": "xyz123",
		            "applicationName": "ApurvWithEaiData_1212_2016-03-17T04:00:00.000Z",
		            "configName": "ApurvWithEaiData",
		            "engagementQuestions": [
		                4,5,6 
		            ],
		            "dataDetails": {
		                "itgField": "1212",
		                "mgrField": "Glenn",
		                "projectDescription": "",
		                "targetDate": "2016-03-17T04:00:00.000Z",
		                "eai": [
		                    "1111",
		                    "2222",
		                    "3333",
		                    "4444"
		                ]
		            },
		            "capacityPlanData": {
		                "engagementType": "",
		                "capacityPlanQuestions":  [
		                    0,1
		                ],
		                "requestTitle": "",
		                "requestDescription": "",
		                "serverHostNames": [
		                    "test4.fedex.com",
		                    "test5.fedex.com",
		                    "test6.fedex.com"
		                ]
		            }
		        },
		        {
		            "supportAssignorName": "Frank",
		            "configStatus": "Completed",
		            "registrationKey": "abc123",
		            "applicationName": "ApurvWithEngagementQuestions_1212_2016-03-18T14:00:00.000Z",
		            "configName": "ApurvWithEngagementQuestions",
		            "engagementQuestions": [
		                0, 1
		            ],
		            "dataDetails": {
		                "itgField": "1212",
		                "mgrField": "Glenn",
		                "projectDescription": "",
		                "targetDate": "2016-03-18T14:00:00.000Z",
		                "eai": null
		            },
		            "capacityPlanData": {
		                "engagementType": "",
		                "capacityPlanQuestions": null,
		                "requestTitle": "",
		                "requestDescription": "",
		                "serverHostNames": null
		            }
		        },
		        {
		            "supportAssignorName": "Frank",
		            "configStatus": "Draft",
		            "registrationKey": "",
		            "applicationName": "Thiru_1234567_2016-03-17T04:00:00.000Z",
		            "configName": "Thiru_1234567",
		            "engagementQuestions": null,
		            "dataDetails": {
		                "itgField": "1234567",
		                "mgrField": "3760",
		                "projectDescription": "ADRE Project description for ITG 123456",
		                "targetDate": "2016-03-17T04:00:00.000Z",
		                "eai": [
		                    "5113",
		                    "1234"
		                ]
		            },
		            "capacityPlanData": {
		                "engagementType": "",
		                "capacityPlanQuestions": null,
		                "requestTitle": "",
		                "requestDescription": "",
		                "serverHostNames": null
		            }
		        },
		        {
		            "supportAssignorName": "Denise",
		            "configStatus": "Draft",
		            "registrationKey": "",
		            "applicationName": "Apurv_112233_2016-03-17T04:00:00.000Z",
		            "configName": "Apurv_112233",
		            "engagementQuestions": null,
		            "dataDetails": {
		                "itgField": "112233",
		                "mgrField": "3760",
		                "projectDescription": "ADRE Project description for ITG 112233",
		                "targetDate": "2016-03-17T04:00:00.000Z",
		                "eai": [
		                    "112233"
		                ]
		            },
		            "capacityPlanData": {
		                "engagementType": "",
		                "capacityPlanQuestions": null,
		                "requestTitle": "",
		                "requestDescription": "",
		                "serverHostNames": null
		            }
		        },
		        {
		            "supportAssignorName": "Denise",
		            "configStatus": "Draft",
		            "registrationKey": "",
		            "applicationName": "Thiru_2345678_2016-03-17T04:00:00.000Z",
		            "configName": "Thiru_2345678",
		            "engagementQuestions": null,
		            "dataDetails": {
		                "itgField": "2345678",
		                "mgrField": "3760",
		                "projectDescription": "ADRE Project description for ITG 2345678",
		                "targetDate": "2016-03-17T04:00:00.000Z",
		                "eai": [
		                    "5113",
		                    "1234",
		                    "5678"
		                ]
		            },
		            "capacityPlanData": {
		                "engagementType": "",
		                "capacityPlanQuestions": null,
		                "requestTitle": "",
		                "requestDescription": "",
		                "serverHostNames": null
		            }
		        }
		    ],
		    "configNameExists": false
		};
	$scope.myProjects=engagement;
	
	
	};

app.controller("learnController",mycontroller);

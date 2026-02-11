pipeline {
  agent any

  tools {
    nodejs "NodeJS 20.20.0"
  }
  
  environment {
    IBM_ID = credentials('ibm-login')
    BASE_DIR = "<your_path>/ibmjob" // <-- Change this to your repository path
  }
  
  stages {
    stage('Run Cypress') {
      steps {
          sh '''
            cd $BASE_DIR
            node -v
            USERNAME=$IBM_ID_USR PASSWORD=$IBM_ID_PSW npx cypress run
          '''
      }
    }
  }
}
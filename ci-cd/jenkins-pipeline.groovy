pipeline {
  agent any

  tools {
    nodejs "NodeJS 20.20.0"
  }
  
  environment {
    IBM_ID = credentials('ibm-login')
    SECRET = credentials('ibm-login-secret')
    BASE_DIR = "/home/cesilko/Sources/ibmjob" // <-- Change this to your repository path
  }
  
  stages {
    stage('Run Cypress') {
      steps {
          sh '''
            cd $BASE_DIR
            node -v
            USERNAME=$IBM_ID_USR PASSWORD=$IBM_ID_PSW SECRET=$SECRET npx cypress run
          '''
      }
    }
  }
}
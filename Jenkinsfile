pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Compilando el proyecto Pokemundo...'
            }
        }
        stage('Test') {
            steps {
                echo 'Ejecutando pruebas...'
            }
        }
    }
    post {
        success {
            echo '🎉 Pipeline ejecutado exitosamente.'
        }
        failure {
            echo '💥 Falló el pipeline.'
        }
    }
}

import { ThemeProvider } from 'styled-components'

import db from '../../db.json'

import QuizScreen from '../../src/screens/Quiz'

export default function QuizDaGaleraPage() {
  return (
    <ThemeProvider theme={db.theme}>
      <QuizScreen
        externalQuestions={db.questions}
        externalBg={db.bg}
      />
    </ThemeProvider>
  )
}

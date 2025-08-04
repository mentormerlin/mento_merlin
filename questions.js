// Questions data for Mentor Merlin quiz
// Each question object contains:
//  - id: unique identifier
//  - question: the question text
//  - type: question type ("mcq" for multiple choice, "tf" for true/false,
//    "fitb" for fill in the blanks, "image" for image-based)
//  - options: array of answer options (for MCQ)
//  - correctIndex or correctAnswer: index of the correct option or answer
//  - explanation: a brief explanation shown after submission

const questions = [
    {
        id: 1,
        type: 'mcq',
        question: 'What is the fee for the OSCE CPD Accredited Program?',
        options: ['£699.79', '£899.79', '£999.79', '£1099.79'],
        correctIndex: 1,
        explanation: 'The OSCE CPD Accredited Program costs £899.79 according to Mentor Merlin\'s official course details.'
    },
    {
        id: 2,
        type: 'mcq',
        question: 'For how many years is NMC registration initially valid?',
        options: ['1 year', '2 years', '3 years', '5 years'],
        correctIndex: 2,
        // Updated explanation to align with official guidance
        explanation: 'NMC registration is valid for 3 years. After this period, the NMC PIN must be renewed.'
    },
    {
        id: 3,
        type: 'mcq',
        question: 'How many modules are there in OET?',
        options: ['Three', 'Four', 'Five', 'Six'],
        correctIndex: 1,
        explanation: 'OET consists of four modules: Reading, Listening, Writing, and Speaking.'
    },
    {
        id: 4,
        type: 'mcq',
        question: 'How much is the NMC evaluation fee?',
        options: ['£140', '£153', '£83', '£299'],
        correctIndex: 0,
        explanation: 'The NMC evaluation stage fee is £140, paid during the first stage of registration.'
    },
    {
        id: 5,
        type: 'mcq',
        question: 'What is the passing score requirement for Part A of CBT?',
        options: ['8 correct answers', '13 correct answers', '10 correct answers', '12 correct answers'],
        correctIndex: 1,
        explanation: 'Part A of the CBT requires a minimum of 13 correct answers to pass.'
    },
    {
        id: 6,
        type: 'mcq',
        question: 'How long is the CBT result valid from the date of issue?',
        options: ['1 year', '2 years', '3 years', '5 years'],
        correctIndex: 1,
        explanation: 'CBT results are valid for 2 years from the date they are issued.'
    },
    {
        id: 7,
        type: 'mcq',
        question: 'Which platform conducts the CBT exam?',
        options: ['Pearson VUE', 'British Council', 'IDP', 'Cambridge'],
        correctIndex: 0,
        explanation: 'The CBT exam is conducted by Pearson VUE.'
    },
    {
        id: 8,
        type: 'mcq',
        question: 'What book is provided with the OET course?',
        options: ['Merlin Book of OET', 'OET Success Guide', 'Oxford OET Book', 'None'],
        correctIndex: 0,
        explanation: 'The OET course includes the Merlin Book of OET for comprehensive preparation.'
    },
    {
        id: 9,
        type: 'mcq',
        question: 'How many lessons are provided per module in OET?',
        options: ['15', '18', '21', '25'],
        correctIndex: 2,
        explanation: 'Each OET module contains 21 lessons for thorough coverage.'
    },
    {
        id: 10,
        type: 'mcq',
        question: 'How many parts are in the CBT exam?',
        options: ['One', 'Two', 'Three', 'Four'],
        correctIndex: 1,
        explanation: 'The CBT exam has two parts: Part A (Numeracy) and Part B (Clinical).'
    },
    {
        id: 11,
        type: 'mcq',
        question: 'Who gets the OET Grammar Module?',
        options: ['All candidates', 'Candidates who fail the grammar quiz', 'Candidates from the UK only', 'Candidates who fail OET'],
        correctIndex: 1,
        explanation: 'Candidates who fail the initial grammar quiz must complete the 7-day grammar module.'
    },
    {
        id: 12,
        type: 'mcq',
        question: 'What is the total fee for taking the full OSCE exam?',
        options: ['£694', '£794', '£894', '£994'],
        correctIndex: 1,
        explanation: 'The full OSCE exam fee is £794.'
    },
    {
        id: 13,
        type: 'mcq',
        question: 'What is the course fee for the OET Premium Crack Course?',
        options: ['£299.79', '£199.79', '£399.79', '£250.00'],
        correctIndex: 0,
        explanation: 'The OET Premium Crack Course costs £299.79.'
    },
    {
        id: 14,
        type: 'mcq',
        question: 'What is the fee for the Short-Term CBT course?',
        options: ['£49.79', '£59.79', '£89.79', '£99.79'],
        correctIndex: 0,
        explanation: 'The Short-Term CBT course fee is £49.79.'
    },
    {
        id: 15,
        type: 'mcq',
        question: 'What is the fee for a partial OSCE resit?',
        // Updated options to match Mentor Merlin’s pricing (394, 397, 497, 494)
        options: ['£394', '£397', '£497', '£494'],
        correctIndex: 1,
        explanation: 'The fee for a partial OSCE resit is £397.'
    },
    {
        id: 16,
        type: 'mcq',
        question: 'How many stations are in the OSCE exam?',
        // Corrected the first option to 5; the OSCE features 10 stations in total
        options: ['5', '3', '4', '10'],
        correctIndex: 3,
        explanation: 'There are 10 stations in the OSCE exam.'
    },
    {
        id: 17,
        type: 'mcq',
        question: 'How many clinical skills stations are tested in OSCE?',
        options: ['2', '4', '6', '8'],
        correctIndex: 1,
        explanation: 'The OSCE tests candidates on 4 clinical skills stations.'
    },
    {
        id: 18,
        type: 'mcq',
        question: 'What is the fee for the Ultimate CBT course?',
        options: ['£59.79', '£79.79', '£89.79', '£99.79'],
        correctIndex: 2,
        explanation: 'The Ultimate CBT course fee is £89.79.'
    },
    {
        id: 19,
        type: 'mcq',
        question: 'How many days of access does the Short-Term CBT course provide?',
        options: ['30', '45', '60', '90'],
        correctIndex: 1,
        explanation: 'Short-Term CBT course provides 45 days of access.'
    },
    {
        id: 20,
        type: 'mcq',
        question: 'How much is the NMC registration stage fee?',
        options: ['£140', '£153', '£83', '£299'],
        correctIndex: 1,
        explanation: 'The NMC registration stage fee is £153, payable during the second stage of the process.'
    }
];

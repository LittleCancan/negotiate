import Vue from 'vue'  //引入Vue
import VueRouter from 'vue-router'  //引入vue-router

const Login = ()=> import('@/components/Login');
const Register = ()=> import('@/components/Register');
const Homepage = ()=> import('@/components/Homepage');
const ShowSystem = ()=> import('@/pages/userPages/showSystem');
const QuizLibrary = ()=> import('@/pages/userPages/quizLibrary');
const QuizList = ()=> import('@/pages/userPages/quizList');
const QuizDetail = ()=> import('@/pages/userPages/quizDetail');
const UserResult = ()=> import('@/pages/userPages/userResult');
const DoQuiz = ()=> import('@/pages/userPages/doQuiz');


Vue.use(VueRouter); //使用vue-router
const routes = [  //创建路由，这里使用了上面引入的组件
    {
        path: '/',
        name: 'login',
        component: Login
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
    {
        path: '/homepage',
        redirect:'/homepage/showSystem',
        name: 'homepage',
        component: Homepage,
        children:[
            {
                path: 'showSystem',
                name: 'showSystem',
                component: ShowSystem,
            },
            {
                path: 'quizLibrary',
                redirect:'/homepage/quizLibrary/quizList',
                name: 'quizLibrary',
                component: QuizLibrary,
                children:[
                    {
                        path: 'quizList',
                        name: 'quizList',
                        component: QuizList,
                    },
                    {
                        path: 'quizDetail/:id',
                        name: 'quizDetail',
                        component: QuizDetail,
                        props:true
                    }
                ]
            },
            {
                path: 'userResult',
                name: 'userResult',
                component: UserResult,
            },
            {
                path: 'doQuiz/:id',
                name: 'doQuiz',
                component: DoQuiz,
                props:true
            }
        ]
    }
];

const router = new VueRouter({
    routes,
    mode: 'history' //使URL不带#
});

export default router  //导出路由

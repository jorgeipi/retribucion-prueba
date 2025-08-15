export const mainRoutes = [
    {
        path: '/nota-estancias',
        name: 'Nota Estancias',
        // component: Inicio,
        component: () => import('@/pages/NotaEstancias.vue'),
    }
];

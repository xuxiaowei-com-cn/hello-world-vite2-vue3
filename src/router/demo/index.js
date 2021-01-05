import RefsRef from '../../views/refs-api/Ref.vue'
import RefsUnref from '../../views/refs-api/Unref.vue'

const refsRef = {
    path: '/refs-api/ref',
    name: 'RefsRef',
    component: RefsRef,
}

const refsUnref = {
    path: '/refs-api/unref',
    name: 'RefsUnref',
    component: RefsUnref,
}

export {
    refsRef,
    refsUnref,
}

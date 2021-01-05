import RefsRef from '../../views/refs-api/Ref.vue'
import RefsUnref from '../../views/refs-api/Unref.vue'
import RefsToRef from '../../views/refs-api/ToRef.vue'

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

const refsToRef = {
    path: '/refs-api/toRef',
    name: 'RefsToRef',
    component: RefsToRef,
}

export {
    refsRef,
    refsUnref,
    refsToRef,
}

import { configureStore, DeepPartial, ReducersMapObject } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider/config/stateSchema'
import { counterReducer } from 'entities/Counter/model/slice/counterSlice'
import { userReducer } from 'entities/User'
import { createReducerManager } from 'app/providers/StoreProvider/config/reducerManaget'

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>
) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
    }

    const reducerManager = createReducerManager(rootReducer)

    const store = configureStore<DeepPartial<StateSchema>>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    })

    // @ts-ignore
    store.reducerManager = reducerManager
    return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']

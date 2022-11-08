import { useCallback, useEffect, useState } from "react";
import { ApiException } from "../../shared/services/api/ApiException";
import { ITarefa, TarefasService } from '../../shared/services/api/tarefas/TarefasService';

export const Dashboard = () => {
    const [lista, setLista] = useState<ITarefa[]>([]);

    useEffect(() => {
        TarefasService.getAll()
            .then((result) => {
                if (result instanceof ApiException) {
                    alert(result.message)
                } else {
                    setLista(result)
                }
            })
    }, [])


    const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> = useCallback((e) => {
        if (e.key === 'Enter') {
            if (e.currentTarget.value.trim().length === 0) return

            const value = e.currentTarget.value
            e.currentTarget.value = '';

            TarefasService.create({ title: value, isCompleted: false })
                .then((result) => {
                    if (result instanceof ApiException) {
                        alert(result.message)
                    } else {
                        setLista((oldLista) => {
                            if (oldLista.some((ListItem) => ListItem.title === value)) return oldLista
                            return [...oldLista, result]
                        })
                    }
                })


        }
    }, [])

    return (
        <div>
            <p>Lista</p>
            <input onKeyDown={handleInputKeyDown} />
            <p>{lista.filter((ListItem) => ListItem.isCompleted).length}</p>
            <ul>
                {lista.map((ListItem) => {
                    return <li key={ListItem.id}>
                        <input type="checkbox"
                            checked={ListItem.isCompleted}
                            onChange={() => {
                                setLista(oldLista => {
                                    return oldLista.map(oldListitem => {
                                        const newIsCompleted = oldListitem.title === ListItem.title
                                            ? !oldListitem.isCompleted
                                            : oldListitem.isCompleted

                                        return {
                                            ...oldListitem,
                                            isCompleted: newIsCompleted
                                        }
                                    })
                                })
                            }} />
                        {ListItem.title}
                    </li>
                })}
            </ul>
        </div>
    );
};

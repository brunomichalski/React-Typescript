import { useCallback, useState } from "react";

interface IListaItem {
    title: string;
    isSelected: boolean;
}

export const Dashboard = () => {
    const [lista, setLista] = useState<IListaItem[]>([]);

    const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> = useCallback((e) => {
        if (e.key === 'Enter') {
            if (e.currentTarget.value.trim().length === 0) return

            const value = e.currentTarget.value
            e.currentTarget.value = '';
            setLista((oldLista) => {
                if (oldLista.some((ListItem) => ListItem.title === value)) return oldLista

                return [...oldLista, {
                    title: value,
                    isSelected: false
                }]
            })
        }
    }, [])

    return (
        <div>
            <p>Lista</p>
            <input onKeyDown={handleInputKeyDown} />
            <p>{lista.filter((ListItem) => ListItem.isSelected).length}</p>
            <ul>
                {lista.map((ListItem) => {
                    return <li key={ListItem.title}>
                        <input type="checkbox"
                        checked={ListItem.isSelected}
                            onChange={() => {
                                setLista(oldLista => {
                                    return oldLista.map(oldListitem => {
                                        const newIsselect = oldListitem.title === ListItem.title
                                            ? !oldListitem.isSelected
                                            : oldListitem.isSelected

                                        return {
                                            ...oldListitem,
                                            isSelected: newIsselect
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

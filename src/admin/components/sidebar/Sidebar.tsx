import {Link} from "react-router-dom";
import styles from "./Sidebar.module.scss";

function Sidebar() {
     const sidebarList = [
        {
            name: "Добавить новость",
            to: "/news/create",
        },
        {
            name: "Редактировать новость",
            to: "/news/update",
        },
        {
            name: "Список новостей",
            to: "/news/all",
        },
        {
            name: "Список todo",
            to: "/todos",
        },
        {
            name: "Добавить проект в портфолио",
            to: "/projects/add",
        },
        {
            name: "Список проектов в портфолио",
            to: "/projects/all",
        },
    ];
    return (
        <aside className={styles.sidebar}>
            <ul className={styles.sidebar_list}>
                {sidebarList.map((link) => (
                    <li className={styles.sidebar_list_item} key={link.to}>
                        <Link
                            className={styles.link}
                            to={link.to}

                        >
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
            <div className={styles.admin_version}>
                <strong>0.6.0</strong>
            </div>
        </aside>
    );
}

export default Sidebar;

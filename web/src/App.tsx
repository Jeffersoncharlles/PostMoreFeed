import './styles/styles.css'
import styles from './App.module.css'

import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

// author: {avatar_Url: "", name:"",role:""}
// publishedAt: Date
// content: String
const post = [
  {
    id: 1,
    author: {
      avatarUrl: "https://i.pravatar.cc/150?img=24",
      name: "Keith Weber",
      role: "Dev Front-end"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉 keith.design/doctorcare' },
    ],
    publishedAt: new Date('2022-02-24 22:45:38')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://i.pravatar.cc/150?img=51",
      name: "Melvin Mann",
      role: "Dev Back-end"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉 melvin.design/doctorcare' },
    ],
    publishedAt: new Date('2022-06-02 21:42:38')
  },
]

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {post.map((post, index) => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  )
}

/*
forEach ... nao tem retorno
map ... e igual o forEach mas ele retorna algo dentro dele

*/
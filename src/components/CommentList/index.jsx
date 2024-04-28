import { Comment } from "../Comment"
import { Replies } from "../Replies"
import styles from './commentlist.module.css'

export const CommentList = ({ comments }) => {
  return (
    <section className={styles.comments}>
      <h2>
        Comentários
      </h2>
      <ul>
        {comments.map(comment => <li key={comment.id}>
          <Comment comment={comment} key={comment.id} />
          <Replies />
        </li>)}
      </ul>
    </section>
  )
}
import { Comment } from "../Comment"
import { Replies } from "../Replies"
import { ReplyModal } from "../ReplyModal"

import styles from './commentlist.module.css'

export const CommentList = ({ comments }) => {
  return (
    <section className={styles.comments}>
      <h2>
        Comentários
      </h2>
      <ul>
        {comments.map(comment => <li>
          <Comment comment={comment} key={comment.id} />
          <ReplyModal comment={comment} />
          <Replies comment={comment}/>
        </li>)}
      </ul>
    </section>
  )
}
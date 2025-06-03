// import React, { useState, ChangeEvent } from "react";
// import { Card, CardContent } from "../components/ui/card";
// import { Input } from "../components/ui/input";
// import { Button } from "../components/ui/button";

// interface Comment {
//   id: string;
//   author: string;
//   text: string;
// }

// interface CommentSectionProps {
//   postId: string; }

// export default function CommentSection({ postId }: CommentSectionProps) {
//   const [comments, setComments] = useState<Comment[]>([]);
//   const [newComment, setNewComment] = useState('');
//   const [authorName, setAuthorName] = useState('');
//   const [editingCommentId, setEditingComment] = useState<string | null>(null);


//   console.log("Post ID:", postId);

//   const handleAddComment = () => {
//     if (newComment.trim() && authorName.trim()) {
//       const newCommentObj: Comment = {
//         id: new Date().toISOString(),
//         author: authorName,
//         text: newComment,
//       };
//       setComments([...comments, newCommentObj]);
//       setNewComment('');
//       setAuthorName('');

      
//       console.log(`Adding comment for post: ${postId}`);
//     }
//   };

//   const handleEditComment = (commentId: string) => {
//     const commentToEdit = comments.find((comment) => comment.id === commentId);
//     if (commentToEdit) {
//       setNewComment(commentToEdit.text);
//       setAuthorName(commentToEdit.author);
//       setEditingComment(commentId);
//     }
//   };

//   const handleSaveEditedComment = () => {
//     if (newComment.trim() && authorName.trim() && editingCommentId) {
//       const updatedComments = comments.map((c) =>
//         c.id === editingCommentId
//           ? { ...c, text: newComment, author: authorName }
//           : c
//       );
//       setComments(updatedComments);
//       setNewComment('');
//       setEditingComment(null);

     
//       console.log(`Saving edited comment for post: ${postId}`);
//     }
//   };

//   const handleAuthorChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setAuthorName(e.target.value);
//   };

//   const handleCommentChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setNewComment(e.target.value);
//   };

//   return (
//     <div className="mt-8">
//       <h2 className="text-2xl font-semibold">Comments</h2>

//       <div className="mt-4 space-y-4">
//         {comments.length > 0 ? (
//           comments.map((comment) => (
//             <Card key={comment.id}>
//               <CardContent className="p-4">
//                 <div className="font-semibold">{comment.author}</div>
//                 <p>{comment.text}</p>
//                 <Button
//                   onClick={() => handleEditComment(comment.id)}
//                   className=" bg-lime-700 mt-2 font-sans p-6 py-2 text-white rounded-xl"
//                 >
//                   Edit
//                 </Button>
//               </CardContent>
//             </Card>
//           ))
//         ) : (
//           <p className="text-white text-lg font-sans">No comments yet</p>
//         )}
//       </div>

//       <div className="mt-6">
//         <Input
//           type="text"
//           value={authorName}
//           onChange={handleAuthorChange}
//           placeholder="Your name"
//           className="w-full mb-2"
//         />

//         <Input
//           type="text"
//           value={newComment}
//           onChange={handleCommentChange}
//           placeholder="Add a comment"
//           className="w-full mb-2"
//         />

//         <Button
//           onClick={editingCommentId ? handleSaveEditedComment : handleAddComment}
//           className="mt-4 px-8 py-3 bg-gradient-to-r from-green-500 via-green-600 to-lime-500 text-white font-semibold rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-lime-600 focus:ring-opacity-50"
//         >
//           {editingCommentId ? 'Save Comment' : 'Submit Comment'}
//         </Button>
//       </div>
//     </div>
//   );
// }





















import React, { useState, ChangeEvent } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

interface Comment {
  id: string;
  author: string;
  text: string;
}

interface CommentSectionProps {
  postId: string;
}

export default function CommentSection({ postId }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [editingCommentId, setEditingCommentId] = useState<string | null>(null);

  const handleAddComment = () => {
    if (newComment.trim() && authorName.trim()) {
      const newCommentObj: Comment = {
        id: new Date().toISOString(),
        author: authorName,
        text: newComment,
      };
      setComments([...comments, newCommentObj]);
      setNewComment('');
      setAuthorName('');
      console.log(`Added comment for post: ${postId}`);
    }
  };

  const handleEditComment = (commentId: string) => {
    const comment = comments.find((c) => c.id === commentId);
    if (comment) {
      setNewComment(comment.text);
      setAuthorName(comment.author);
      setEditingCommentId(commentId);
    }
  };

  const handleSaveEditedComment = () => {
    if (newComment.trim() && authorName.trim() && editingCommentId) {
      const updated = comments.map((c) =>
        c.id === editingCommentId ? { ...c, text: newComment, author: authorName } : c
      );
      setComments(updated);
      setNewComment('');
      setAuthorName('');
      setEditingCommentId(null);
      console.log(`Edited comment for post: ${postId}`);
    }
  };

  const handleAuthorChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAuthorName(e.target.value);
  };

  const handleCommentChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewComment(e.target.value);
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold text-emerald-800">Comments</h2>

      <div className="mt-4 space-y-4">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <Card key={comment.id}>
              <CardContent className="p-4">
                <div className="font-semibold text-green-700">{comment.author}</div>
                <p className="text-gray-800">{comment.text}</p>
                <Button
                  onClick={() => handleEditComment(comment.id)}
                  className="bg-lime-700 mt-2 font-sans px-4 py-2 text-white rounded-xl hover:bg-lime-800 transition"
                >
                  Edit
                </Button>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="text-gray-600 font-sans text-base">No comments yet</p>
        )}
      </div>

      <div className="mt-6">
        <Input
          type="text"
          value={authorName}
          onChange={handleAuthorChange}
          placeholder="Your name"
          className="w-full mb-2"
        />

        <Input
          type="text"
          value={newComment}
          onChange={handleCommentChange}
          placeholder="Add a comment"
          className="w-full mb-2"
        />

        <Button
          onClick={editingCommentId ? handleSaveEditedComment : handleAddComment}
          className="mt-4 px-8 py-3 bg-gradient-to-r from-green-500 via-green-600 to-lime-500 text-white font-semibold rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-lime-600 focus:ring-opacity-50"
        >
          {editingCommentId ? 'Save Comment' : 'Submit Comment'}
        </Button>
      </div>
    </div>
  );
}














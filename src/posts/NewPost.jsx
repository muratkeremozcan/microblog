import React, {useState} from 'react'
import Box from '@material-ui/core/Box'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

export default function NewPost({addPost}) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleTitleChange = e => setTitle(e.target.value)
  const handleContentChange = e => setContent(e.target.value)
  const submitForm = () =>
    addPost({
      title,
      content,
    })

  return (
    <form data-cy="new-post">
      <FormGroup>
        <FormControl>
          <TextField
            data-cy="title"
            label="Title"
            name="title"
            value={title}
            onChange={handleTitleChange}
          />
        </FormControl>
      </FormGroup>

      <FormGroup>
        <TextField
          data-cy="content"
          label="Share your thoughts"
          name="content"
          value={content}
          onChange={handleContentChange}
          multiline
          rows={4}
        ></TextField>
      </FormGroup>

      <Box mt={1}>
        <Button
          data-cy="submit"
          variant="contained"
          color="primary"
          onClick={submitForm}
        >
          Submit
        </Button>
      </Box>
    </form>
  )
}

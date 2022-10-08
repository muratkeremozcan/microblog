import Box from '@material-ui/core/Box'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import {useFormState} from '../shared/useFormState'

export default function NewPost({addPost}) {
  const [state, setInputValue, validate] = useFormState({
    title: {
      value: '',
      required: true,
    },
    content: {
      value: '',
      required: true,
    },
  })

  const submitForm = () =>
    validate()
      ? addPost({
          title: state.title.value,
          content: state.content.value,
        })
      : null

  return (
    <form data-cy="new-post">
      <FormGroup>
        <FormControl>
          <TextField
            data-cy="title"
            label="Title"
            name="title"
            value={state.title.value}
            onChange={setInputValue}
            error={!!state.title.error}
            helperText={state.title.error}
          />
        </FormControl>
      </FormGroup>

      <FormGroup>
        <TextField
          data-cy="content"
          label="Share your thoughts"
          name="content"
          value={state.content.value}
          onChange={setInputValue}
          error={!!state.content.error}
          helperText={state.content.error}
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

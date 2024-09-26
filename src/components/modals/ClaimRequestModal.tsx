import { FieldValues, SubmitHandler } from 'react-hook-form'
import FXForm from '../form/FXForm'
import FXModal from './FXModal'
import FXInput from '../form/FXInput'
import FXTextarea from '../form/FXTextarea'
import { Button } from '@nextui-org/button'
import { useClaimRequest } from '@/src/hooks/claimRequest.hook'
import { Spinner } from '@nextui-org/spinner'

interface IProps {
  id: string
  questions: string[]
}

const ClaimRequestModal = ({ id, questions }: IProps) => {
  const { mutate: handleClaimRequest, isPending } = useClaimRequest()

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const claimRequestData = {
      item: id,
      description: data.description,
      answers: Object.keys(data)
        .filter((formElement) => formElement.startsWith('answer'))
        .map((answer) => data[answer])
    }

    handleClaimRequest(claimRequestData)
  }

  return (
    <FXModal
      buttonText='Claim Request'
      title='Claim Request'
      buttonClassName='flex-1'>
      <FXForm onSubmit={onSubmit}>
        {questions.map((question, index) => (
          <div className='mb-4' key={index}>
            <p className='mb-1'>{question}</p>
            <FXInput
              label={`Answer - ${index + 1}`}
              name={`answer-${index + 1}`}
            />
          </div>
        ))}
        <FXTextarea label='Description' name='description' />
        <Button
          isLoading={isPending}
          spinner={<Spinner size='sm' color='default' />}
          className='w-full my-2 flex-1'
          size='lg'
          type='submit'>
          Send
        </Button>
      </FXForm>
    </FXModal>
  )
}

export default ClaimRequestModal

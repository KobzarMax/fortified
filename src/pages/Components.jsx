import { Button } from "../components/basic/Button";
import { Tag } from "../components/basic/Tag";
import { FormCustombox } from "../components/basic/FormComponents/FormCustombox";
import { FormFileInput } from "../components/basic/FormComponents/FormFileInput";
import { FormInput } from "../components/basic/FormComponents/FormInput";
import { Fragment, useState } from "react";
import { FormSelect } from "../components/basic/FormComponents/FormSelect";
import { FormTextarea } from "../components/basic/FormComponents/FormTextarea";
import { ModalOverlay } from "../components/Modal/ModalOverlay";

export const Components = () => {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(!showModal);
  };
  return (
    <Fragment>
      <div className={`components-wrapper`}>
        <div className={`components-small`}>
          <Button size={`lg`} btnStyle={`primary`}>
            Primary
          </Button>
          <Button size={`lg`} btnStyle={`secondary`}>
            Secondary
          </Button>
          <Button size={`lg`} btnStyle={`tertiary`}>
            Tertiary
          </Button>
          <Tag type={`text`} text={`Tag text`} />
          <Tag text={`Tag in container`} type={`containered`} />
          <FormCustombox
            type={`radio`}
            label={`Radio`}
            id={`radio`}
            inputValue={true}
            name={`radio`}
          />
          <FormCustombox
            type={`radio`}
            label={`Radio disabled`}
            disabled
            id={`radio-disabled`}
            name={`radio-disabled`}
          />
          <FormCustombox
            type={`checkbox`}
            label={`Checkbox`}
            id={`checkbox`}
            name={`checkbox`}
          />
          <FormCustombox
            type={`checkbox`}
            label={`Checkbox disabled`}
            disabled
            id={`checkbox-disabled`}
            name={`checkbox-disabled`}
          />
          <FormCustombox
            type={`checkbox`}
            label={`Checkbox error`}
            isError
            inputValue={true}
            id={`checkbox-error`}
            name={`checkbox-error`}
          />
        </div>
        <FormFileInput />
        <FormInput
          type={`text`}
          name={`input-text`}
          label={`Input text`}
          placeholder={`Input text`}
        />
        <FormInput
          type={`text`}
          name={`input-text`}
          label={`Input text disabled`}
          disabled
          placeholder={`Input text`}
        />
        <FormInput
          type={`text`}
          name={`input-text`}
          label={`Input text required`}
          required
          placeholder={`Input text`}
        />
        <FormInput
          type={`text`}
          name={`input-text`}
          label={`Input text error`}
          required
          isError
          error={`Error message`}
          placeholder={`Input text`}
        />
        <FormSelect
          placeholder={`select option`}
          label={`Select`}
          options={["option1", "option2", "option3", "option4", "option5"]}
        />
        <FormSelect
          placeholder={`select option`}
          label={`Select disabled`}
          disabled
          options={["option1", "option2", "option3", "option4", "option5"]}
        />
        <FormSelect
          placeholder={`select option`}
          label={`Select error`}
          isError
          error={`Error message`}
          options={["option1", "option2", "option3", "option4", "option5"]}
        />
        <FormTextarea
          name={`textarea-text`}
          label={`Textarea text`}
          placeholder={`Textarea text`}
        />
        <FormTextarea
          name={`textarea-text`}
          label={`Textarea text disabled`}
          disabled
          placeholder={`Textarea text`}
        />
        <FormTextarea
          name={`textarea-text`}
          label={`Textarea text required`}
          required
          placeholder={`Textarea text`}
        />
        <FormTextarea
          name={`textarea-text`}
          label={`Textarea text error`}
          required
          isError
          error={`Error message`}
          placeholder={`Textarea text`}
        />
        <Button
          onClick={() => handleShowModal()}
          size={`lg`}
          btnStyle={`primary`}
        >
          ShowModal
        </Button>
        {showModal && (
          <ModalOverlay size={`500`} onClose={handleShowModal}>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusantium ad amet, at corporis dicta esse illum laborum
              molestiae provident quae quia quod, quos rerum, sapiente sed
              similique unde veniam voluptatibus.
            </div>
          </ModalOverlay>
        )}
      </div>
    </Fragment>
  );
};

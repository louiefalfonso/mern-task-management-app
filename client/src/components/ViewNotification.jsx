import { Dialog, DialogTitle } from "@headlessui/react";
import ModalWrapper from "./ModalWrapper";
import Button from "./Button";

const ViewNotification = ({open, setOpen, el}) => {
  return (
    <>
    <ModalWrapper open={open} setOpen={setOpen}>
      <div className="py-4 w-full flex flex-col gap-4 items-center justify-center">
        <DialogTitle as="h3" className="font-semibold text-lg">
            {el?.task?.title}
        </DialogTitle>
        <p className="text-center text-gray-500">
          {el?.text}
        </p>
        <Button
          type="button"
          className="bg-white px-8 text-sm font-semibold text-gray-900 sm:w-auto border"
          onClick={() => setOpen(false)}
          label="Close"
        />
      </div>
    </ModalWrapper>
    </>
  )
}

export default ViewNotification
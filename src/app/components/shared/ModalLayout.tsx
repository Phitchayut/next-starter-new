import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useSelector } from 'react-redux';
import { AppState, useAppDispatch } from '@/store/store';
import { Breakpoint } from '@mui/material';
import { closeModal } from '@/store/modal/modalSlice';
import { MODAL_BODY_TYPES } from '@/utils/Constant';


const ModalLayout = () => {
  const dispatch = useAppDispatch();
  const modalReducer = useSelector((state: AppState) => state.modalReducer);
  const [fullWidth] = React.useState(true);
  const close = () => {
    dispatch(closeModal());
  };

  return (
    <>
      <Dialog
        open={modalReducer.isOpen || false}
        maxWidth={modalReducer.size as Breakpoint}
        fullWidth={fullWidth}
        fullScreen={modalReducer.fullScreen}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          {
            {
              // [MODAL_BODY_TYPES.CONFIRMATION]: (
              //   <ConfirmationModalBody
              //     extraObject={modalReducer.extraObject}
              //     closeModal={close}
              //   />
              // ),
              // [MODAL_BODY_TYPES.CONFIRM_DELETE_MEMBER]: (
              //   <ConfirmDeleteMember
              //     extraObject={modalReducer.extraObject}
              //     closeModal={close}
              //   />
              // ),
              // [MODAL_BODY_TYPES.ADD_NEW_MEMBER]: (
              //   <AddNewMember
              //     extraObject={modalReducer.extraObject}
              //     closeModal={close}
              //   />
              // ),
              // [MODAL_BODY_TYPES.VIEW_MEMBER]: (
              //   <ViewMember
              //     extraObject={modalReducer.extraObject}
              //     closeModal={close}
              //   />
              // ),
              // [MODAL_BODY_TYPES.SHOW_MEMBER_DUPLICATE]: (
              //   <MemberDuplicateModal
              //     extraObject={modalReducer.extraObject}
              //     closeModal={close}
              //   />
              // ),
              // [MODAL_BODY_TYPES.SHOW_QRCODE]: (
              //   <ShowQrCode
              //     extraObject={modalReducer.extraObject}
              //     closeModal={close}
              //   />
              // ),
              // [MODAL_BODY_TYPES.RESEND_EMAIL]: (
              //   <ResendEmail
              //     extraObject={modalReducer.extraObject}
              //     closeModal={close}
              //   />
              // ),
              // [MODAL_BODY_TYPES.REMARK_CHECKIN]: (
              //   <RemarkCheckin
              //     extraObject={modalReducer.extraObject}
              //     closeModal={close}
              //   />
              // ),
              // [MODAL_BODY_TYPES.SHOW_REMARK]: (
              //   <ShowRemark
              //     extraObject={modalReducer.extraObject}
              //     closeModal={close}
              //   />
              // ),
              // [MODAL_BODY_TYPES.SHOW_CHECKIN_MEMBER]: (
              //   <ShowDetailCheckin
              //     extraObject={modalReducer.extraObject}
              //     closeModal={close}
              //   />
              // ),
              // [MODAL_BODY_TYPES.SHOW_CHECKIN_MEMBER_FAILED]: (
              //   <ShowDetailCheckinFailed
              //     extraObject={modalReducer.extraObject}
              //     closeModal={close}
              //   />
              // ),
              // [MODAL_BODY_TYPES.UPDATE_MEMBER]: (
              //   <UpdateMember
              //     extraObject={modalReducer.extraObject}
              //     closeModal={close}
              //   />
              // ),
              // [MODAL_BODY_TYPES.SHOW_NOTIFICATION]: (
              //   <Notification
              //     extraObject={modalReducer.extraObject}
              //     closeModal={close}
              //   />
              // ),
              // [MODAL_BODY_TYPES.SHOW_CONFIRM_CHECKIN_MEMBER]: (
              //   <ShowConfirmCheckin
              //     extraObject={modalReducer.extraObject}
              //     closeModal={close}
              //   />
              // ),
              // [MODAL_BODY_TYPES.CREATE_SCHEDULE]: (
              //   <CreateScheduleModal
              //     extraObject={modalReducer.extraObject}
              //     closeModal={close}
              //   />
              // ),
              // [MODAL_BODY_TYPES.UPDATE_SCHEDULE]: (
              //   <UpdateSchedule
              //     extraObject={modalReducer.extraObject}
              //     closeModal={close}
              //   />
              // ),
              // [MODAL_BODY_TYPES.UPDATE_CHECKIN]: (
              //   <UpdateCheckin
              //     extraObject={modalReducer.extraObject}
              //     closeModal={close}
              //   />
              // ),
              // [MODAL_BODY_TYPES.CREATE_SCHEDULE_CHECKIN]: (
              //   <CreateScheduleCheckinModal
              //     extraObject={modalReducer.extraObject}
              //     closeModal={close}
              //   />
              // ),
            }[modalReducer.bodyType ?? '']
          }
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ModalLayout;

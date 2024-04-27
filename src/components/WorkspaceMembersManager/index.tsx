import React, { useState } from "react";

import Divider from "../Divider";
import Typography from "../Typography";
import Button from "../Button";
import Modal from "../Modal";
import CompanyOwnerCard from "../CompanyOwnerCard";
import MemberCard from "../MemberCard";
import MemberCardList from "../MemberCardList";
import WorkspaceOwnerCard from "../WorkspaceOwnerCard";
import { COMPANY_DATA, WORKSPACE_DATA, Entities } from "../../data.ts";
import { getPermissionRole } from "../../helper.ts";

type WorkspaceMembersManagerProps = {
  workspaceId?: string;
};

const WorkspaceMembersManager = ({
  workspaceId,
}: WorkspaceMembersManagerProps) => {
  const [state, setState] = useState({
    isMemberPopupVisible: false,
    isInvitationPopupVisible: false,
    memberId: "",
    invitationId: "",
  });

  const { workspace } = WORKSPACE_DATA;
  const { company } = COMPANY_DATA;

  const handleAddMember = () => {
    console.log("handleAddMember");
  };

  const handleMemberPermissionsClick = (memberId: string) => {
    console.log("handleMemberPermissionsClick", memberId);
  };

  const handleMemberDeleteClick = (memberId: string) => {
    console.log("handleMemberDeleteClick", memberId);
    setState((prevState) => ({
      ...prevState,
      isMemberPopupVisible: true,
    }));
  };

  const handleCloseMemberPopup = () => {
    console.log("handleCloseMemberPopup");
    setState((prevState) => ({
      ...prevState,
      isMemberPopupVisible: false,
    }));
  };

  const handleRemoveMember = () => {
    console.log("handleRemoveMember");
    if (!workspaceId) {
      return;
    }
    handleCloseMemberPopup();
  };

  const handleSendAgain = (invitationId: string) => {
    console.log("handleSendAgain", invitationId);
    handleCloseMemberPopup();
  };

  const handleInvitationDeleteClick = (invitationId: string) => {
    console.log("handleInvitationDeleteClick", invitationId);
    setState((prevState) => ({
      ...prevState,
      invitationId: invitationId,
      isInvitationPopupVisible: true,
    }));
  };

  const handleCloseInvitationPopup = () => {
    setState((prevState) => ({
      ...prevState,
      isInvitationPopupVisible: false,
    }));
  };

  const handleRemoveInvitation = () => {
    console.log("handleRemoveInvitation");
    handleCloseInvitationPopup();
  };

  const handleInvitationPermissionsClick = (invitationId: string) => {
    console.log("handleInvitationPermissionsClick", invitationId);
  };

  return (
    <div className="max-w-3xl">
      <Divider height="sm" fullWidth />
      <div className="flex flex-col gap-4">
        <Button
          label="add member"
          fullWidth
          color="primary"
          onClick={handleAddMember}
        />
        {workspace?.invitations &&
          workspace?.invitations.map((invited) => (
            <div key={invited._id}>
              <MemberCard
                id={invited._id}
                username={invited.userEmail}
                email=""
                isPending
                role={getPermissionRole(
                  Entities.WORKSPACE,
                  invited.permissions
                )}
                onClickSendAgain={() => handleSendAgain(invited._id)}
                onClickPermissions={() =>
                  handleInvitationPermissionsClick(invited._id)
                }
                onClickDelete={() => handleInvitationDeleteClick(invited._id)}
              />
              {state.isInvitationPopupVisible && (
                <Modal
                  title="remove"
                  onClose={handleCloseInvitationPopup}
                  closeLabel="close"
                  children={
                    <>
                      <div className="gap-4 flex flex-col">
                        <Typography type="h4">
                          workSpace.removeInvitationConfirmation
                          <span className="font-bold">{invited.userEmail}</span>
                        </Typography>
                      </div>
                      <div className="flex flex-row gap-4 w-full mt-6">
                        <Button
                          color="white"
                          label="cancel"
                          fullWidth
                          onClick={handleCloseInvitationPopup}
                        />
                        <Button
                          color="alert"
                          label="remove"
                          fullWidth
                          onClick={handleRemoveInvitation}
                        />
                      </div>
                    </>
                  }
                />
              )}
            </div>
          ))}
        <>
          {workspace?.ownerId === company?.ownerId ? (
            <MemberCard
              id={
                workspace?._companyOwner?.id ? workspace?._companyOwner?.id : ""
              }
              username={
                workspace?._companyOwner?.name
                  ? workspace?._companyOwner.name
                  : ""
              }
              email={
                workspace?._companyOwner?.email
                  ? workspace?._companyOwner?.email
                  : ""
              }
              isWorkspaceOwner
              isCompanyOwner
            />
          ) : (
            <>
              <WorkspaceOwnerCard workspaceOwner={workspace?._owner} />
              <CompanyOwnerCard companyOwner={workspace?._companyOwner} />
            </>
          )}
        </>

        <MemberCardList
          members={workspace?._members}
          workspace={workspace}
          handleMemberDeleteClick={handleMemberDeleteClick}
          handleMemberPermissionsClick={handleMemberPermissionsClick}
          company={company}
          handleRemoveMember={handleRemoveMember}
          isMemberPopupVisible={state.isMemberPopupVisible}
          handleCloseMemberPopup={handleCloseMemberPopup}
        />
      </div>
    </div>
  );
};

export default WorkspaceMembersManager;

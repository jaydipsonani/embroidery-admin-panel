import React from 'react';
import { Modal, Button as BootstrapButton } from 'react-bootstrap';
import styles from './Designs.module.scss';
import { Design } from '@/data/mockData';

interface DesignDetailsModalProps {
    design: Design | null;
    show: boolean;
    onHide: () => void;
    onApprove: (id: string) => void;
    onReject: (id: string) => void;
}

export const DesignDetailsModal: React.FC<DesignDetailsModalProps> = ({
    design,
    show,
    onHide,
    onApprove,
    onReject
}) => {
    if (!design) return null;

    return (
        <Modal show={show} onHide={onHide} size="lg" centered>
            <Modal.Header closeButton className={styles.modalHeader}>
                <Modal.Title>{design.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className={styles.modalContent}>
                    <div className={styles.imagePreview}>
                        <img src={design.image} alt={design.name} className={styles.previewImage} />
                    </div>
                    <div className={styles.details}>
                        <div className={styles.detailItem}>
                            <label>Designer</label>
                            <p>{design.designerName}</p>
                        </div>
                        <div className={styles.detailItem}>
                            <label>Category</label>
                            <p>{design.category}</p>
                        </div>
                        <div className={styles.detailItem}>
                            <label>Price</label>
                            <p>₹{design.price}</p>
                        </div>
                        <div className={styles.detailItem}>
                            <label>Upload Date</label>
                            <p>{design.uploadDate}</p>
                        </div>
                        <div className={styles.detailItem}>
                            <label>Details</label>
                            <p>{design.details}</p>
                        </div>

                        {design.status === 'rejected' && design.rejectionReason && (
                            <div className={styles.rejectionReason}>
                                <label>Rejection Reason</label>
                                <p>{design.rejectionReason}</p>
                            </div>
                        )}
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <BootstrapButton variant="secondary" onClick={onHide}>
                    Close
                </BootstrapButton>
                {design.status === 'pending' && (
                    <>
                        <BootstrapButton variant="danger" onClick={() => onReject(design.id)}>
                            Reject
                        </BootstrapButton>
                        <BootstrapButton variant="success" onClick={() => onApprove(design.id)}>
                            Approve & Publish
                        </BootstrapButton>
                    </>
                )}
            </Modal.Footer>
        </Modal>
    );
};

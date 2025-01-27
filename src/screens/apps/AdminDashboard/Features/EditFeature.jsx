import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetFeatureQuery } from '../../../../redux/features/subscriptionFeatures/subscriptionFeatures';
import FeatureForm from './FeatureForm';

const EditFeature = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetFeatureQuery(id);
  return (
    <div>
      {isLoading ? 'Loading...' : data && <FeatureForm data={data?.data} />}
    </div>
  );
};

export default EditFeature;

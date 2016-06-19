package ee.mtiitson.gradeio.repository;

import ee.mtiitson.gradeio.model.Criterion;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(exported = false)
public interface CriterionRepository extends CrudRepository<Criterion, Long>{
}
